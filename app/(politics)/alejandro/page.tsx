import Link from "next/link"

export const metadata = {
    title: 'Alejandro',
    robots:'noindex, nofollow',
    charset:'UTF-8'
  }
export default function Alejandro() {
    return (
      <section>
        <div className="max-w-6xl mx-auto sm:px-6 relative">
           <div className="relative pt-20 md:pt-24 ">
                <div className="max-w-3xl mx-10">
                    <h1 className='h1'>Alejandro Cañada</h1>
                    <h4 className='h4 pt-4'>About me</h4>
                    <p className='p'>Hi, I am a developer and entrepeneur focus on creating cool apps that cover particular necesities on creative ways. I have experience with technologies like React.js, Nest.js, Next.js, MongoDb, C , Python and some SQL</p>
                    <h4 className='h4 pt-4'>Projects</h4>
                    <p className='p'>Right know I am working on Unigow, an Edtech startup.</p>
                    <h4 className='h4 pt-4'>More about me</h4>
                    <p className='p'>You can get to know me better visting my <Link href="https://github.com/Alex44lel"><b className="underline">Github</b></Link> or <Link href="https://www.linkedin.com/in/alejandroca%C3%B1adahinojosa/"><b className="underline">Linkedin</b></Link> accounts </p>
                    <h4 className='h4 pt-4'>Contact me</h4>
                    <p className='p'>Alejandroch2011@gmail.com</p>
                    
                </div>
              </div>
              </div>
      </section>
    )
  }
  