import React, { useEffect, useState } from 'react'
import '../Css/Finder.css'
import { useDispatch } from 'react-redux'
import { getResult } from '../redux/weatherSlice';
import swal from 'sweetalert';

function Finder() {

    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResult('İstanbul'))
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleResult()
        }
    }

    const handleResult = () => {
        const input = document.getElementById('search-input');
        if (!city) {
            swal({
                title: "Lütfen Bir Şehir Giriniz !",
                icon: "error",
                button: "Tamam",
            });
            input.focus();
        } else {
            dispatch(getResult(city)).unwrap().catch((error) => {
                swal({
                    title: error,
                    icon: "error",
                    button: "Tamam",
                });
                input.focus();
            });
            setCity('');
            input.focus();
        }
    }


    return (
        <div className='finder-cont'>
            <input autoFocus value={city} onChange={(e) => setCity(e.target.value)} type="text" placeholder='Şehir Giriniz...' onKeyDown={handleKeyDown} className='search-input' id='search-input' />
            <button onClick={handleResult} className='search-button'>Ara</button>
        </div>
    )
}

export default Finder