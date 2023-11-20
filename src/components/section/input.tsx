import { Search } from 'lucide-react'

interface InputProps {
  getWord: (word: string) => void;
}

export function Input({ getWord }: InputProps) {
  const handleClick = (event:any) => {
    event.preventDefault()
    const word = event.target.word.value.toLowerCase()
    word ? getWord(word) : console.log('No word')
  }

  return (
    <form className="w-full" onSubmit={handleClick}>
      <div className="flex w-full items-center gap-5 rounded-lg bg-zinc-100 p-5 shadow-sm dark:bg-stone-900">
        <input
          className="flex-1 w-full font-semibold bg-transparent border-0 p-0 text-black placeholder-zinc-600 placeholder:font-medium"
          type="text"
          name="word"
          placeholder="Digite uma palavra"
        />
        <button>
          <Search className="w-5 h-5 text-purple-500 hover:text-purple-700 hover:cursor-pointer" />
        </button>
      </div> 
    </form>
  );
}