import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './AddToys.css'
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';
import Select from 'react-select';
import CreatableSelect from "react-select/creatable";
import Swal from 'sweetalert2';


const AddToys = () => {
    const options = [
        { value: 'racing', label: 'Racing Car' },
        { value: 'tractor', label: 'RC Tructor' },
        { value: 'super', label: 'Super Car' },
    ];
    const [selectedOption, setSelectedOption] = useState(null);
    // console.log(selectedOption)

    const handleAddToys = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgURL = form.imgurl.value;
        const sellerName = form.sname.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const category = selectedOption;
        const description = form.description.value;
        const toysData = {name, imgURL, sellerName, email, price, rating, quantity, category, description}
        form.reset()
        fetch('http://localhost:5000/addtoys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toysData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
                Swal.fire({
                    title: 'Toy Added Successfull!',
                    text: 'Do you want to continue?',
                    icon: 'success',
                    confirmButtonText: 'Keep going!'
                  })
            }
        })
    }

    return (
        <div>
            <Header></Header>
            <Container>
                <div className="form-data">
                    <h2 className='text-center mt-5 mb-0'>Add A Toy</h2>
                    <form onSubmit={handleAddToys} className='' action="">
                        <input type="text" name="name" placeholder='Name' />
                        <input type="text" name="imgurl" placeholder='Image URL' />
                        <input type="text" name="sname" placeholder='Seller Name' />
                        <input type="email" name="email" placeholder='Seller Email' />
                        <input type="number" name="price" placeholder='Price' />
                        <input type="number" name="rating" placeholder='Rating' />
                        <input type="number" name="quantity" placeholder='Quantity' />
                        <CreatableSelect placeholder="Category" className='react-select'
                            defaultValue={"selectedOption"}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                        <textarea name="description" id="" placeholder='Write description...'></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddToys;