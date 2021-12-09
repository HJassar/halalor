import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDebounce } from 'use-debounce/lib'
import axios from 'axios'

import './results.css'

// MUI Components
import ProductListing from '../components/ProductListing/ProductListing';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/system/Box';


const Results = () => {
    const [searchParams] = useSearchParams();
    const q = searchParams.get('q')
    const [searchValue] = useDebounce(q, 1000,)

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const url =
        `/products?` +
        `filters[name][$containsi]=${q}` +
        `&populate=ingredients&populate=coverImage` +
        `&pagination[page]=1&pagination[pageSize]=10`

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get(url)
            setProducts(response.data.data)
            setLoading(false)
        }
        if (q.length >= 3) fetchProducts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [q])

    if (q.length < 3) return <div className='keeptyping'>Keep going...</div>

    if (loading || searchValue !== q) return <CircularProgress size={50} />

    return (
        <main className="Results" >
            {products.length > 0 ?
                products.map(product => (
                    <ProductListing product={product.attributes} />
                ))
                :
                <Box style={{ textAlign: 'center', fontSize: '1.3em' }}>No results found</Box>
            }
        </main>
    )
}

export default Results
