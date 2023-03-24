import React, { useEffect, useState } from 'react'
import { fetchDataInfo } from "./API/apiKey"
import Accordion from 'react-bootstrap/Accordion'


function About() {

    const [name, setName] = useState('')
    const [founder, setfounder] = useState('')
    const [founded, setFounded] = useState('')
    const [ceo, setCeo] = useState('')
    const [coo, setCoo] = useState('')
    const [cto, setCto] = useState('')
    const [headquartersAdress, setHeadquartersAdress] = useState('')
    const [headquartersCity, setHeadquartersCity] = useState('')
    const [headquartersState, setHeadquartersState] = useState('')
    const [website, setWebsite] = useState('')
    const [summary, setSummary] = useState('')

    useEffect(() => {
        const getFetchDataAbout = () => {
            fetchDataInfo()
                .then((data) => {
                    if (useEffect) {
                        setName(data.name)
                        setfounder(data.founder)
                        setFounded(data.founded)
                        setCeo(data.ceo)
                        setCoo(data.coo)
                        setCto(data.cto)
                        setHeadquartersAdress(data.headquarters.address)
                        setHeadquartersCity(data.headquarters.city)
                        setHeadquartersState(data.headquarters.state)
                        setWebsite(data.links.website)
                        setSummary(data.summary)

                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        getFetchDataAbout();
    }, []);



    return (
        <div className='p-10 '>
            <h1 className='text-3xl text-white py-3'>About Section</h1>
            <Accordion className=''>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span className='text-xl'>About</span> </Accordion.Header>
                    <Accordion.Body>
                        <div className='flex flex-col items-center py-3'>
                            <p className='text-3xl'>{name}</p>
                            <p >Founder: <span className='font-medium'>{founder}</span></p>
                            <p>Founded: <span className='font-medium'>{founded}</span></p>
                        </div>
                        <div className='flex justify-around py-3'>
                            <p >Chief Executive Officer: <span className='font-medium'>{ceo}</span></p>
                            <p >Chief Operating Officer: <span className='font-medium'>{coo}</span></p>
                            <p>The Chief Technology Officer: <span className='font-medium'>{cto}</span></p>
                        </div>
                        <p className='text-3xl'>Headquarters</p>
                        <div className='flex justify-around py-3'>
                            <p>Address: <span className='font-medium'>{headquartersAdress}</span></p>
                            <p>City: <span className='font-medium'>{headquartersCity}</span></p>
                            <p>State: <span className='font-medium'>{headquartersState}</span></p>
                        </div>
                        <p className='text-3xl'>Summary</p>
                        <div className='flex flex-col justify-center items-center py-3'>
                            <p><span className='font-medium'>{summary}</span></p>
                            <p>Website: <span className='font-medium'><a className='text-inherit' target="_blank"
                                rel="noreferrer" href={website}>SpaceX</a></span></p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8029562195397!2d-118.32864938431494!3d33.92047058064193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b5def02e41b1%3A0x2f47fabaa0eb0b07!2s12382%20Crenshaw%20Blvd%2C%20Hawthorne%2C%20CA%2090250%2C%20USA!5e0!3m2!1sen!2sca!4v1679609315080!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default About