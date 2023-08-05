import Link from "next/link"


export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <h1 className="text-3xl text-center my-6">About us </h1>
      <ul className="flex flex-col items-start">
        <li className="mb-5 inline-block text-blue-500 font-semibold hover:underline underline-offset-4">
          <Link href="/about/team">our team</Link>
        </li>
        <li className="mb-5 inline-block text-blue-500 font-semibold hover:underline underline-offset-4">
          <Link href="/about/contacts">our contacts</Link>
        </li>
      </ul>
      {children}
    </>
  )
}
