import React, {useState} from 'react';
import Button from "./Button";
import { v4 as uuid } from 'uuid';

const ItemInput = ({addItem}) => {
    const [data, setData] = useState({
        date: '',
        distance: '',
        id: uuid()
    })
    const [error, setError] = useState('')

    const showErrorMessage = () => {
        if (data.distance && !data.date) {
            setError('Date is not selected!')
        }
        else if (data.date && !data.distance)
        {
            setError('Distance traveled is not entered!')
        }
        else {
            setError('Data is not entered!')
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!data.distance || !data.date) {
            showErrorMessage()
            return
        }

        addItem(data)
        setData({
            date: '',
            distance: '',
            id: uuid()
        })
        setError('')
    }

    const handleChange = ({target}) => {
        const {name, value} = target
        setData(prevData => ({...prevData, [name]: value}))
    }

    return (

    <>
        <form className="flex justify-center items-center" onSubmit={handleSubmit} id="form">
            <div className="flex-col p-2 m-2">
                <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900">
                    Date (DD.MM.YYYY)
                </label>
                <input type="date" id="date" min="2018-01-01" max="2030-01-01" onChange={handleChange} value={data.date} name="date"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                />
            </div>
            <div className="flex-col p-3 m-2">
                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900">
                    Distance traveled in km
                </label>
                <input type="text" id="text" value={data.distance} onChange={handleChange} name="distance"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                />
            </div>
            <div className="flex-col justify-center p-2 m-2" >

                <Button onClick={handleSubmit} id="ok-button">
                    OK
                </Button>
            </div>
        </form>
        <label htmlFor="form" className="flex justify-center items-center mb-2 text-sm font-medium text-red-600">
            {error}
        </label>
    </>
    );
};

export default ItemInput;