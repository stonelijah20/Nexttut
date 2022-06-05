import Link from 'next/link'

function Nav() {
  return (
    <>
        <div>
            <nav>
                <ul>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='About'>About</Link></li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default Nav