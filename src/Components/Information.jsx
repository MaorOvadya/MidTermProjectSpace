import React, { useEffect, useState } from 'react'
import { fetchDataHistory } from "./API/apiKey"


function Information() {

    const [title, setTitle] = useState('')
    const [eventDate, setEventDate] = useState('')
    const [details, setDetails] = useState('')
    const [article, setArticle] = useState('')
    const [wikipedia, setWikipedia] = useState('')
    const [array, setArray] = useState([])


    useEffect(() => {
        const getFetchDataHistory = () => {
            fetchDataHistory()
                .then((data) => {
                    if (useEffect) {
                        console.log(data)
                        setArray(data)
                        setTitle(data[0].title)
                        setEventDate(data[0].event_date_utc)
                        setDetails(data[0].details)
                        setArticle(data[0].links.article)
                        setWikipedia(data[0].links.wikipedia)
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getFetchDataHistory();
    }, []);

    const handelClick = () => {
        console.log('clicked me')
    }


    return (
        <div className='bg-black'>

            <div>{array ? Object.keys(array).map((arr) => (
                <div className=' border p-3  bg-white rounded-xl'>
                    <h1 className='text-xl'>{arr[title]}</h1>
                    <h1 className='text-sm py-3'>{details}</h1>
                    <h1 className='text-sm py-3'>{eventDate}</h1>
                    <div className='flex justify-center gap-10 py-3'>
                        <h1 className='text-sm'>Article: <a href={article}>Read More</a></h1>
                        <h1 className='text-sm'>Wikipedia: <a href={wikipedia}>Learn More</a></h1>
                    </div>
                </div >
            )) : []}
            </div>




            <h1 className='text-white p-10'>Historical Event</h1>
            <button onClick={handelClick} type="button" className="btn btn-primary">All History</button>
            <div className=' border p-3  bg-white rounded-xl'>
                <h1 className='text-xl'>{title}</h1>
                <h1 className='text-sm py-3'>{details}</h1>
                <h1 className='text-sm py-3'>{eventDate}</h1>
                <div className='flex justify-center gap-10 py-3'>
                    <h1 className='text-sm'>Article: <a href={article}>Read More</a></h1>
                    <h1 className='text-sm'>Wikipedia: <a href={wikipedia}>Learn More</a></h1>
                </div>
            </div >
        </div >
    )
}

export default Information