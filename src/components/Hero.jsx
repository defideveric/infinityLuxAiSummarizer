import { logo } from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz-logo' className='w-28 object-contain'/>

        <button type='button' onClick={() => window.open('https://www.github.com/erichudson')}
        className='black_btn'>
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>Artifical Intelligence</span>
      </h1>

      <h2 className='desc'>
        Simplify your reading with infinityLux, an open-source article summarizer that
        transforms lengthy articles into cleat and concise summaries
      </h2>
    </header>
  )
}

export default Hero