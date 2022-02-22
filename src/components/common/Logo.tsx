import Link from 'next/link';

export const Logo = () => {
    return (
        <Link href="/" replace>
            <a className='logo' style={{ width: 200 }}>
                <img src="/images/logo.png" alt="" loading="lazy" />
            </a>
        </Link>
    )
}