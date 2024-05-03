import { useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'

const NASALibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async () => {
    try {
      setLoading(true)
      const response = await axios.get(
        `https://images-api.nasa.gov/search?q=${searchQuery}`
      )
      setSearchResults(response.data.collection.items)
    } catch (error) {
      setError('Error fetching search results')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <h1 className='mt-4'>NASA Image and Video Library</h1>
        <div className='input-group mb-3'>
          <input
            type='text'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='form-control'
            placeholder='Enter search query'
          />
          <button className='btn btn-primary' onClick={handleSearch}>
            Search
          </button>
        </div>
        {loading && <p>Loading...</p>}
        {error && <p className='text-danger'>Error: {error}</p>}
        <div className='row'>
          {searchResults.map((item) => (
            <div className='col-md-4 mb-4' key={item.data[0].nasa_id}>
              <div className='card'>
                <img
                  src={item.links[0].href}
                  alt={item.data[0].title}
                  className='card-img-top'
                />
                <div className='card-body'>
                  <h5 className='card-title'>{item.data[0].title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default NASALibraryPage
