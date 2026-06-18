import React from 'react'
import Styles from './details.module.css'

const fetchProductDetail = async (id) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    return response.json();
}

const BlogDetail = async ({ params }) => {
    const { id } = params;
    //console.log(id);
    const dataObj = await fetchProductDetail(id);

    // console.log(dataObj);
    return (
        <div className="mt-5 container d-flex flex-column justify-content-center align-items-center" >
            <div className="card">
                <div className="card-body">
                    <img
                        src={dataObj.images[0]}
                        width={450}
                        height={350}
                        className={`rounded mx-auto d-block ${Styles.cardImage}`}
                        alt={dataObj.title} />
                    <h2>{dataObj.title}</h2>
                    <p className="btn btn-outline-primary">{dataObj.price}</p>
                    <p>{dataObj.description}</p>
                </div>
            </div>

        </div >
    )
}

export default BlogDetail

