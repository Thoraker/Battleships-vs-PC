import { ThemeProvider } from "@/components/theme-provider"
import { Outlet } from "react-router-dom"
import Header from "./components/header"

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <main className='dark:bg-gray-900/70 dark:text-white h-screen flex flex-col'>
          <Header />
          <Outlet />
        </main>
      </ThemeProvider >
    </>
  )
}

export default App;
