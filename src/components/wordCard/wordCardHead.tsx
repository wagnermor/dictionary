export function WordCardHead(props: any) {
  return (
    <>
      <h1 className="text-4xl font-bold text-black py-12 pl-1.5">{props.word}</h1>
      
      <div className="flex w-full justify-between pl-2.5 gap-4">
        <p className="text-base text-black font-bold">{props.noun}
        </p>
        
        <div className="w-full flex items-center justify-end">
          <div className="bg-neutral-400 flex-shrink-0 w-full h-px border-0"></div>
        </div>
      </div>
    </>
  )
}