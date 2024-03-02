import { useEffect, useState } from "react";
import { PostData } from "./types";
import { getPosts } from "./getPosts";
import { PostsList } from "./PostsList";

export function PostsPage() {
    const [isLoading, setIsLoading] = useState(true)
    const [posts, setPosts] = useState<PostData[]>([])

    useEffect(() => {
        let cancel = false
        getPosts().then((data) => {
            if (!cancel) {
                setPosts(data)
                setIsLoading(false)
            }
        })
        return () => {
            cancel = true
        }
    }, [])
    if (isLoading) {
        return <div>Ładuje...</div>
    }

    return (
        <div>
            <h2>Posty:</h2>
            <PostsList posts={posts} />
        </div>
    )
}