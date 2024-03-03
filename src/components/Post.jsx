export default function Post ({ post }) {
    
    return (
        <p>
            <b>{post.car.year}</b><br />
            {post.car.make} {""}
            {post.car.model} {""}
            {post.car.trim} 
        </p>
    )
}