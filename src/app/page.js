'use client'
import styles from "./page.module.css"
import Image from 'next/image'
import { Slide, Zoom } from 'react-awesome-reveal'
import { useRouter } from 'next/navigation'

const Home = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/contact');
  }

  return (
    <div className={styles.section}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Slide direction='left' >
              <h1>Next JS is an awesome Framework!</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.
              </p>
            </Slide>
            <div className='mt-3'>
              <button className='btn btn-warning mx-1'>Read more</button>
              <button onClick={() => handleRoute()} className='btn btn-outline-primary mx-1'>Contact</button>
            </div>
          </div>
          <div className='col-lg-6'>
            <Zoom direction='up'>
              <Image
                src='/img1.jpg'
                width={450}
                height={400}
                alt='Picture'
              />
            </Zoom>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
