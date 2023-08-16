// import styles from './page.module.css'
import Image from "next/image";
import img1 from '@/assets/bat1.jpeg';
import img2 from '@/assets/bat2.jpg';
import img3 from '@/assets/bat4.jpg';

export default function Home() {
  return (
    <div className="overflow-auto">
      <h1 className="md:text-3xl text-2xl text-center ">Welcome to the Next !!!</h1>
      <section className="flex-col">
        <h2 className="text-center text-xl sm:text-2xl py-5">First layout</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className=" relative text-center h-40 bg-slate-300 flex items-center justify-center">
            <Image 
              src={img1} 
              alt='Batsy the first' 
              className="absolute top-0 left-0 w-full h-full z-0 object-cover" 
            />
            col1
          </div>
          <div className="relative text-center h-40 bg-slate-400 flex items-center justify-center">
            <Image 
                src={img3} 
                alt='Batsy the first' 
                className="absolute top-0 left-0 w-full h-full z-0 object-cover" 
              />
            col2
          </div>
          <div className="relative md:col-span-2 h-60 bg-gradient-to-tr from-slate-200 to-slate-500 flex items-center justify-center">
            <Image 
                src={img2} 
                alt='Batsy the first' 
                className="absolute top-0 left-0 w-full h-full z-0 object-cover" 
              />
            col3
          </div>
        </div>
      </section>
      <section className="flex flex-col ">
        <h2 className="sm:text-2xl text-xl text-center py-8">Second layout</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
          <div className="text-center h-40 bg-slate-300 flex items-center justify-center">
            col1
          </div>
          <div className="text-center h-40 bg-slate-400 flex items-center justify-center">
            col2
          </div>
          <div className="col-span-1 h-40 bg-slate-200 flex items-center justify-center">
            col3
          </div>
          <div className="col-span-1 h-40 bg-slate-300 flex items-center justify-center">
            col4
          </div>
          <div className="col-span-1 h-40 bg-slate-400 flex items-center justify-center">
            col5
          </div>
          <div className="col-span-1 h-40 bg-slate-200 flex items-center justify-center">
            col6
          </div>
          <div className="text-center h-40 bg-slate-300 flex items-center justify-center">
            col1
          </div>
          <div className="text-center h-40 bg-slate-400 flex items-center justify-center">
            col2
          </div>
          <div className="text-center h-40 bg-slate-300 flex items-center justify-center">
            col1
          </div>
        </div>
        
      </section>

      <section className="flex flex-col">
        <h2 className="text-center sm:text-2xl text-xl py-5">the Third layout</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="text-center h-60 bg-slate-300 flex items-center justify-center">
            col1
          </div>
          <div className="text-center md:col-span-2 h-60 bg-slate-400 flex items-center justify-center">
            col2
          </div>
          <div className="md:col-span-2 h-40 bg-slate-200 flex items-center justify-center">
            col3
          </div>
          <div className="order-first lg:order-none text-center h-40 bg-slate-300 flex items-center justify-center">
            col1
          </div>
        </div>
      </section>
    </div>
  )
}
