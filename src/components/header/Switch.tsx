export function Switch() {
  return (
    <svg
      className="relative cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      width={52}
      height={24}
      viewBox="0 0 52 24"
      fill="none"
    >
      <rect 
        className="fill-neutral-500 group-hover:fill-purple-500 transition-colors duration-200"
        width={52}
        height={24}
        rx={12}
      />
      <circle
        className="fill-white pl-1 "
        cx={12}
        cy={12}
        r={9}
      />
    </svg>
  )
}
