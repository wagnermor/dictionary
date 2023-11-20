import { BookIcon } from "./BookIcon"
import { Switch } from "./Switch"
import { Moon } from "./Moon"

export function Header({ theme, setTheme }: any) {
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  return (
    <header className="w-full flex items-center justify-between mt-12 p-0 bg-white dark:bg-zinc-950">
      <BookIcon />
      <button onClick={handleClick} className="group flex items-center gap-2">
        <Switch />
        <Moon />
      </button>
    </header>
  )
}