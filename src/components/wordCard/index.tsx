// 'use client'

import { WordCardHead } from "./wordCardHead"
import { WordCardMain } from "./wordCardMain"


export async function WordCard(props: {}) {
  return (
    <div className="w-full bg-white">
      
      <WordCardHead word={`${data[0].word}`} noun={`${data[0].meanings[0].partOfSpeech}`}/>
      <WordCardMain definition={data[0].meanings[0].definitions[0].definition}/>
      {/* { data.map(item => <p key={item.word}>{item.meanings}</p>)} */}
    </div>
  )
}