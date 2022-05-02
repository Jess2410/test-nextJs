import Link from "next/link";
import Head from "next/head";

function Header({ title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <style jsx>{`
          ul {
            padding-left: 0;
            width: 20%;
            display: flex;
            list-style-type: none;
          }
          ul li {
            margin-right: 20px;
          }
          ul a {
            font-size: 16px;
            font-weight: 600;
          }
        `}</style>
      </ul>
    </>
  );
}
export default Header;
