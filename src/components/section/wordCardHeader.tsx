export function Word({ word }:any) {
  return (
    <h1 className="w-full text-4xl text-left font-bold text-black py-12 pl-1.5 dark:text-white">{ word }</h1>

  )
}
export function Speech({ speech }:any) {
  return (
    <div className="flex w-full justify-between pl-2.5 gap-4">
      <p className="text-base text-black font-bold dark:text-white">{ speech }</p>
      
      <div className="w-full flex items-center justify-end">
        <div className="bg-neutral-400 flex-shrink-0 w-full h-px border-0"></div>
      </div>
    </div>
  )
}