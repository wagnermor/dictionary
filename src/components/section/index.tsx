'use client'
import { useEffect, useState } from "react"

import * as WordCardHeader from "./wordCardHeader"
import { WordCardMain } from "./wordCardMain"
import { Input } from "./input"

export function Section() {
  const [wordData, setWordData] = useState('')
  const [inputWord, setInputWord] = useState('')
  const [word, setWord] = useState('')
  const [speech, setSpeech] = useState('')
  const [meanings, setMeanings] = useState([])
  const [synonyms, setSynonyms] = useState('')

  async function loadDataWord(inputWord: string): Promise<void> {
    setInputWord(inputWord)
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await response.json()
    setWordData(data)

    setWord(data[0].word)
    setSpeech(data[0].meanings[0].partOfSpeech)
    setMeanings(data[0].meanings[0].definitions)
    setSynonyms(data[0].meanings[0].synonyms[0])
  }
  
  useEffect(() => {
    if (inputWord){
      console.log("useEfect true")
      loadDataWord(inputWord)
      console.log(meanings)
    }
    loadDataWord('keyboard')
    console.log(synonyms)
  },[])

  useEffect(() => {
    console.log(word)
  },[meanings])
  return (
    <>
      <Input getWord={ loadDataWord }/>
      <WordCardHeader.Word word={inputWord ? inputWord : '...'}/>
      <WordCardHeader.Speech  speech={speech ? speech: 'none'}/>
      <WordCardMain meanings={ meanings } synonyms={ synonyms }/>
    </>
  )
}