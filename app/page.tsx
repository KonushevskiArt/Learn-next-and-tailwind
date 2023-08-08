// import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  return (
    <div className="overflow-auto">
      <h1 className="text-3xl text-center ">Welcome to the Next !!!</h1>
      <section className="flex flex-col">
        <h2 className="text-center text-2xl py-5">First layout</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center h-20 bg-slate-300 flex items-center justify-center">
            col1
          </div>
          <div className="text-center h-20 bg-slate-400 flex items-center justify-center">
            col2
          </div>
          <div className="col-span-2 h-40 bg-slate-200 flex items-center justify-center">
            col3
          </div>
        </div>
      </section>
      <section className="flex flex-col ">
        <h2 className="text-3xl text-center py-8">Second layout</h2>
        <div className="grid grid-cols-4 gap-2">
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
        <h2 className="text-center text-2xl py-5">the Third layout</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center h-60 bg-slate-300 flex items-center justify-center">
            col1
          </div>
          <div className="text-center col-span-2 h-60 bg-slate-400 flex items-center justify-center">
            col2
          </div>
          <div className="col-span-2 h-40 bg-slate-200 flex items-center justify-center">
            col3
          </div>
          <div className="text-center h-40 bg-slate-300 flex items-center justify-center">
            col1
          </div>
        </div>
      </section>
    </div>
  )
}
