import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <a className="navbar-brand mt-2 ms-2" id="decoration-none">
              <img src="/images/logo.png" alt="image" width="150px" height="50px" />
            </a>
          </Link>
    )
}

export default Logo