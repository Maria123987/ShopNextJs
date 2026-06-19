import Image from 'next/image'
import React from 'react'
import Styles from '../blog/blog.module.css'

const Card = ({ id, title, price, category, thumbnail }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>

            <Image height={250} width={200} src={thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className={Styles.cardTitle}>{title}</h5>
                <p className="card-text">{price}</p>
                <p className="card-text">{category}</p>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card content.</p>
                <a className="btn btn-outline-primary" href={`/blog/${id}`}>Detail</a>
            </div>
        </div>
    )
}

export default Card
