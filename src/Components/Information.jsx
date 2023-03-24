import React, { useEffect, useState } from 'react'
import { fetchDataHistory, fetchDataMissions } from './API/apiKey'

function Information() {

  const [array, setArray] = useState([])
  const [arrayTwo, setArrayTwo] = useState([])
  const [open, setOpen] = useState(false)
  const [openTwo, setOpenTwo] = useState(false)

  useEffect(() => {
    const getFetchDataHistory = () => {
      fetchDataHistory()
        .then((data) => {
          if (useEffect) {
            setArray(data)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getFetchDataHistory()
  }, [])

  useEffect(() => {
  }, [array])

  useEffect(() => {
    const getFetchDataMissions = () => {
      fetchDataMissions()
        .then((dataTow) => {
          if (useEffect) {
            setArrayTwo(dataTow)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
    getFetchDataMissions()
  }, [])

  useEffect(() => {
  }, [arrayTwo])


  return (
    <div className="bg-black">
      <h1 className="text-white p-10">Historical Event</h1>
      <div className='py-5 flex flex-row justify-around'>
        <button
          onClick={() => setOpen((prev) => !prev)}
          type="button"
          className="btn btn-primary px-4 py-2"
        >

          History
        </button>
        <button
          onClick={() => setOpenTwo((prev) => !prev)}
          type="button"
          className="btn btn-primary px-4 py-2"
        >

          Missions
        </button>
      </div>
      <div>
        {open &&
          array.map((item) => (
            <div className=" border p-3  bg-white">
              <h1 className="text-xl">{item.title}</h1>
              <h1 className="text-sm py-3">{item.details}</h1>
              <h1 className="text-sm py-3">{item.event_date_utc}</h1>
              <div className="flex justify-center gap-10 py-3">
                <h1 className="text-sm">
                  Article:{' '}
                  <a target="_blank" rel="noreferrer" href={item.links.article}>
                    Read More
                  </a>
                </h1>
                <h1 className="text-sm">
                  Wikipedia:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.links.wikipedia}
                  >
                    Learn More
                  </a>
                </h1>
              </div>
            </div>
          ))}
      </div>


      {/* Missions */}
      <div>
        {openTwo &&
          arrayTwo.map((item) => (
            <div className=" border p-3  bg-white">
              <h1 className="text-xl">{item.mission_name}</h1>
              <h1 className="text-sm py-3">{item.description}</h1>
              <div className="flex justify-center gap-10 py-3">
                <h1 className="text-sm">
                  Website:{' '}
                  <a target="_blank" rel="noreferrer" href={item.website}>
                    Read More
                  </a>
                </h1>
                <h1 className="text-sm">
                  Wikipedia:{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.wikipedia}
                  >
                    Learn More
                  </a>
                </h1>
              </div>
            </div>
          ))}
      </div>


    </div>
  )
}

export default Information
