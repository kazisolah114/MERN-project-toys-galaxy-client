import React, { useEffect } from 'react';
import Header from '../../Layout/Header/Header';
import { Container } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './MyToys.css'
import Swal from 'sweetalert2';

const MyToys = () => {
    const toys = useLoaderData()
    // console.log(toys._id)
    const handleDeleteButton = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toys-beast-server-kazisolah114.vercel.app/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your toy has been removed.',
                                'success'
                            )
                        }
                    })
                
            }
        })
    }
    
    return (
        <div>
            <Header></Header>
            <Container>
                <table className='mx-auto w-100 toy-table my-5'>
                    <thead>
                        <tr className='bg-light table-header p-5'>
                            <th>TOY NAME</th>
                            <th>SELLER NAME</th>
                            <th>PRICE</th>
                            <th>AVAILABLE QUANTITY</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{
                                toys.map(toy => <p key={toy._id}>{toy.name}</p>)
                            }</td>
                            <td>{
                                toys.map(toy => <p key={toy._id}>{toy.sellerName}</p>)
                            }</td>
                            <td>{
                                toys.map(toy => <p key={toy._id}>${toy.price}</p>)
                            }</td>
                            <td>{
                                toys.map(toy => <p key={toy._id}>{toy.quantity}pcs</p>)
                            }</td>
                            <td>{
                                toys.map(toy => <p key={toy._id}><Link  to={`/updatetoys/${toy._id}`} toy={toy} className='update-btn'>UPDATE</Link></p>)
                            }</td>
                            <td>{
                                toys.map(toy => <p key={toy._id}><Link onClick={() => handleDeleteButton(toy._id)} className='delete-btn'>DELETE</Link></p>)
                            }</td>

                        </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    );
};

export default MyToys;