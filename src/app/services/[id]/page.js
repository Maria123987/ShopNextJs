'use client'

import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

const ServiceDetails = ({ params }) => {
    const searchParams = useSearchParams();

    /*
        for calling or sending parameter from another page to this page:
        router.push('/services/1?name=mari');
    */

    //From routing = 1 :  https://mysite.com/services/1?name=mari&category=22
    const { id } = params;
    const name = searchParams.get('name');
    const category = searchParams.get('category');
    console.log(id);
    console.log(name);
    console.log(category);

    return (
        <div>page</div>
    )
}

export default ServiceDetails