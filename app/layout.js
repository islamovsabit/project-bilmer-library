import './globals.scss'


export const metadata = {
    title: 'Bilmer Library',
    description: 'Generated by create next app',
}

import Navbar from './components/web/Header.js'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navbar/>
                {children}
            </body>
        </html>
    )
}
