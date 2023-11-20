export function WordCardMain({ meanings, synonyms }:any) {
  return (
    <div className="w-full pl-2.5 pr-8">
      <p className="text-base pb-6 font-medium text-neutral-400 text-opacity-60">Meanings</p>
      <ul className="list-disc text-purple-400 pl-5">
        { meanings.map((meaning:any)=> <li className="text-xl pb-5 leading-3 list-disc text-purple-500"><span className="text-black text-sm font-normal dark:text-white">{meaning.definition}</span></li>)}
      </ul>
      <p className="flex gap-5 items-center text-base font-medium text-neutral-400 text-opacity-60">
        Synonyms {synonyms.split(' ').map((synonym:string)=> <span className="flex items-center gap-4 text-purple-500 text-sm font-normal">{synonym} </span>)}
      </p>
    </div>
  )
}