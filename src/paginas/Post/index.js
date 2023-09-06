import { useParams } from "react-router-dom"
import posts from "json/posts.json"
import PostModelo from "componentes/PostModelo"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import "./Post.css"
import NaoEncontrada from "paginas/NaoEncontrada"
import PaginaPadrao from "componentes/PaginaPadrao"
import PostCard from "componentes/PostCard"


export default function Post(){

    const parametros = useParams()
    
    const post = posts.find((post)=> {
        return post.id === Number(parametros.id)
    })

    // A URL do post é válida?
    if (!post){
        return <NaoEncontrada />
    }

    // Filtrando posts com ID diferente do post atual
    // Randomizando lista de postsRecomendados
    // Pegando apenas 4 posts para exibir na recomendação
    const postsRecomendados = posts
    .filter(postFiltrado => postFiltrado.id !== post.id)
    .sort(()=> Math.random() - .5)
    .slice(0,4)
  
    return(
            <PaginaPadrao>
                <PostModelo
                    fotoCapa={`/assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                    >
                    <div className="post-markdown-container">
                        <ReactMarkdown>
                            {post.texto}
                        </ReactMarkdown>
                    </div>
                </PostModelo>

                <div className="posts-recomendados-container">
                    <h2 className="posts-recomendados-titulo">Você também pode gostar de:</h2> 
                    <ul className="posts-recomendados">
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post}/>
                        </li>
                    ))}
                    </ul>
                </div>

            </PaginaPadrao>
    )
}

