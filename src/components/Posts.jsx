import Post from "./Post"

export const Posts = () => {

    const posts = [
        {
            "id": "1",
            "car": {
                "year" : "2024",
                "make" : "Toyota",
                "model" : "Tundra",
                "trim" : "TRD Pro",
                "color" : "Terra",
            }
        },
        {
            "id": "2",
            "car":{
                "year" : "2018",
                "make" : "Nissan",
                "model" : "GTR",
                "trim" : "Nismo",
                "color" : "Cloud White",
        
            }
        },
        {
            "id": "1",
            "car": {
                "year" : "2023",
                "make" : "Porsche",
                "model" : "Taycan",
                "trim" : "GTS Sport Turismo",
                "color" : "Chalk",   
            }       
        }
    ]

    return (
        <>
            {posts.length > 0 ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Posts to Display</p>}
        </>
    )
}