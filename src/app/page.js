//"use client"
import styles from "./page.module.css"

const Home = () => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">

          <div className="col-lg-6">
            <h1>Next JS is an Aweome Framework!</h1>
            <p>Descrition  here Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.</p>
            <button className="btn btn-warning mx-1">Read more</button>
            <button className="btn btn-outline-primary mx-1">contact</button>
          </div>

          <div className="col-lg-6">
            <img
              src="/image1.jpg"
              width={450}
              height={400}
              alt="Picture" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
