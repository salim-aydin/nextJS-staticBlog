import Image from 'next/image'
import { Inter } from 'next/font/google'
import BlogCard from '../components/BlogCards'
import styles from './styles.module.css'

const inter = Inter({ subsets: ['latin'] })
// async fonksiyon oluşturacağız ve açıklayacağız 
async function getPosts(){   
  const response = await fetch('https://dummyjson.com/posts?limit=10') // fetch ile api'yi çağırıyoruz 
  return response.json() // json formatında döndürüyoruz  
}

export default async function Home() {
  const {posts} = await getPosts() // getPosts fonksiyonunu çağırıyoruz ve posts değişkenine atıyoruz
  console.log(posts)
  return (
   <div className={styles.blogsContainer}>
    {
      posts.map( post => <BlogCard key={post.id} {...post} /> )
    }
    
   </div>
  )
}
