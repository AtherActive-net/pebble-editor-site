import HomePage from "@core/components/pages/home";
import {Poppins} from 'next/font/google'

const poppins = Poppins({weight: ['400'], subsets: ['latin']})

export default function Home() {
  return (
    <div className={poppins.className}>
      <HomePage/>
    </div>
  )
}
