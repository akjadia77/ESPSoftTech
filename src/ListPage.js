import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
/* import About from './About';
import Contact from './Contact'; */
/* import Axios from 'axios'; */
/* import {useNavigate} from 'react-router-dom'; */

const ListPage = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const [token, setToken] = useState("");
    useEffect(() => {
        console.log(token, "OPOP");
    }, [token])


    const [listData, setListData] = useState([]);
    useEffect(() => {

    }, [listData]);

    useEffect(() => {
        getAllData();
    }, []);

    const getAllData = (e) => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://espsofttech.in:6021/api/getMarketplaceNFTs", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setListData(result.data)
            })
            .catch(error => console.log('error', error));
    }

    const sortAscending = () => {
        const numAscending = [...listData].sort((a, b) => a.price - b.price);
        setListData(numAscending);
    }

    const sortDescending = () => {
        const numDeccendig = [...listData].sort((a, b) => b.price - a.price);
        setListData(numDeccendig);
    }

    const sortDateAscending = () => {
        const sortDate = [...listData].sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
        setListData(sortDate);
    }

    const sortDateDecending = () => {
        const sortDate = [...listData].sort((a, b) => new Date(b.datetime) - new Date(a.datetime));
        setListData(sortDate);
    }

    const sortCategAscending = () => {
        const sortData = [...listData].sort((a, b) => new Date(a.category_id) - new Date(b.category_id));
        setListData(sortData);
    }

    const sortCategDecending = () => {
        const sortData = [...listData].sort((a, b) => new Date(b.category_id) - new Date(a.category_id));
        setListData(sortData);
    }


    return (
        <div id='home'>



            <button className="btn btn-primary" onClick={() => sortAscending()}>Sort Ascending Order By price </button><br></br>
            <button className="btn btn-primary" onClick={() => sortDescending()}>Sort Descending Order By price</button><br></br>


            <button className="btn btn-primary" onClick={() => sortDateAscending()}>Sort Ascending Order By Date</button><br></br>
            <button className="btn btn-primary" onClick={() => sortDateDecending()}>Sort Descending Order By Date</button><br></br>


            <button className="btn btn-primary" onClick={() => sortCategAscending()}>Sort Ascending Order By Category</button><br></br>
            <button className="btn btn-primary" onClick={() => sortCategDecending()}>Sort Descending Order By Category</button><br></br>
            {
                listData.length == 0 ? ""
                    :
                    listData.map((val, index) => {
                        return (
                            <p>
                                Item  {index}
                                <p>
                                    category_id : {val.category_id}
                                </p>
                                <p>
                                    category_name : {val.category_name}
                                </p>
                                <p>
                                    datetime : {val.datetime}
                                </p>
                                <p>
                                    description : {val.description}
                                </p>
                                <p>
                                    id : {val.id}
                                </p>
                                <p>
                                    name : {val.name}
                                </p>
                                <p>
                                    price : {val.price}
                                </p>



                            </p>
                        );
                    })
            }

        </div >

    )
}

export default ListPage;