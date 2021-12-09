import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
// MUI Components
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// MUI Icons
import SearchIcon from '@mui/icons-material/Search'

import './Search.css'

const Search = () => {
    const atHome = (useLocation()).pathname === '/';
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get('q') || ''

    const [inputValue, setInputValue] = useState(q)

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        setSearchParams({ q: inputValue })
        // eslint-disable-next-line
    }, [inputValue])

    useEffect(() => {
        if (q !== null && q !== '') navigate('/search?q=' + q)
        else {
            navigate('/')
            setInputValue('')
        }
        // eslint-disable-next-line
    }, [q])

    return (
        <div
            className="Search"
            style={{ maxWidth: atHome ? 500 : 300 }}
        >
            <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>}
                    size={atHome ? 'medium' : 'small'}
                    fullWidth
                    onInput={handleInput}
                    value={inputValue}
                    placeholder="Search..."
                />
            </form>
        </div>
    )
}

export default Search
