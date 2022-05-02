import Layout from '../../components/Layout';
import Link from 'next/link';


function PostNode({ title }) {
    return (
        <>
               <li> 
                    <Link href="/blog/[title]" as={`/blog/${title}`}>
                        <a>Blog {title}</a>
                    </Link>
                </li>
        </>
    )
}

function Blog(){
    const title = 'Blog';
    return(
        <Layout title={title}>
            <ul>
                <PostNode title="Post-1" />
                <PostNode title="Post-2" />
                <PostNode title="Post-3" />
            </ul>
        </Layout>
    )
}
export default Blog;