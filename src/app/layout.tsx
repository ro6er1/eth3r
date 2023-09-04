"use client";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: '400',
  subsets: ['latin'] 
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <title>Roger Taylor - FED, Design & Artist </title>
        <link rel="icon" href="favicon.ico" sizes="any" />
        <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          color: #333332;
          height: 100vh;
          font-size: clamp(1rem, 10vw, 1.3rem);
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
