import React, { useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../Layout/Header/Header';
import { Link, useLoaderData } from 'react-router-dom';
import './AllToys.css'

const AllToys = () => {
    const toys = useLoaderData()
    return (
        <div>
            <Header></Header>
            <Container>
                <div className="alltoys py-5">
                    <table className='mx-auto w-100 toy-table'>
                        <thead>
                            <tr className='bg-light table-header p-5'>
                                <th>SELLER NAME</th>
                                <th>TOY NAME</th>
                                <th>SUB-CATEGORY</th>
                                <th>PRICE</th>
                                <th>AVAILABLE QUANTITY</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-1'>
                                <td className=''>
                                    {
                                        toys.map(toy => <p key={toy._id}>{toy.sellerName}</p>)
                                    }
                                </td>
                                <td>
                                    {
                                        toys.map(toy => <p key={toy._id}>{toy.name}</p>)
                                    }
                                </td>
                                <td>
                                    {
                                        toys.map(toy => <p key={toy._id}>{toy.name}</p>)
                                    }
                                </td>
                                <td>
                                    {
                                        toys.map(toy => <p key={toy._id}>${toy.price}</p>)
                                    }
                                </td>
                                <td>
                                    {
                                        toys.map(toy => <p key={toy._id}>{toy.quantity} pcs</p>)
                                    }
                                </td>
                                <td>
                                    {
                                        toys.map(toy => <p key={toy._id}>
                                            <Link to={`/alltoys/${toy._id}`} className='mb-0 toy-details-btn'>View Details</Link>
                                        </p>)
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default AllToys;