import React, {useEffect, useState} from "react";
import Header from "../header/header";
import Sidebar from "../sibar/Sidebar";
import axios from "axios";
import {Base_url_developpement as devURL} from "../../config/config";

const Addproduct = (props) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (token === null){
        props.history.push('/');
    }
    useEffect(async ()=>{
        categorie();
    },[]);
    const dispo = [{id: 1,name:'disponible'},{id: 0,name:'non disponible'}];
    const [data, setData] = useState([]);
    const[image,setImage]=useState("");
    const[name,setName]=useState("");
    const[description,setDescription]=useState("");
    const[price,setPrice]=useState("");
    const[reduction,setReduction]=useState("");
    const[stock,setStock]=useState("");
    const[disponibilite,setDisponibilite]=useState("");
    const[category_id,setCategory_id]=useState("");
    async function add(e) {
        e.preventDefault();
        let item = {image,name,disponibilite,description,price,reduction,stock,category_id};
        const formData = new FormData();
        formData.append('name',item.name);
        formData.append('image',item.image);
        formData.append('disponibilite',item.disponibilite);
        formData.append('description',item.description);
        formData.append('price',item.price);
        formData.append('reduction',item.reduction);
        formData.append('stock',item.stock);
        formData.append('category_id',item.category_id);
        console.log(formData);
        axios.post(devURL+'product/store',formData)
            .then(response =>{
                console.log(response);
                props.history.push('/product')
            }).catch(error => {
                console.log(error)
        })
    }
    function categorie(){
        axios.get(devURL+'category/list')
            .then(cat => {
                console.log(cat.data.data);
                let setdata = cat.data.data;
               setData(setdata);
            }).catch(error => {
            console.log(error);
        })
    }
         return(
              <div>
                  <div className="wrapper">
                      <Header />
                       <div className="container mt-5 xxl">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="card card-primary">
                                    <div className="card-header">
                                         <h3 className="card-title">Ajouter un produit </h3>
                                    </div>
                                    <form onSubmit={add}>
                                        <div className="card-body">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Libelle</label>
                                                <input type="text" className="form-control" id="exampleInputEmail1"
                                                       placeholder="Enter libelle" onChange={(e)=>setName(e.target.value)}  required />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Description</label>
                                                <input type="text" className="form-control"
                                                       id="exampleInputPassword1" onChange={(e)=>setDescription(e.target.value)}  placeholder="Entre description" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Prix</label>
                                                <input type="number" className="form-control"
                                                       id="exampleInputPassword1" onChange={(e)=>setPrice(e.target.value)}  placeholder="Entre Prix" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Reduction</label>
                                                <input type="number" className="form-control"
                                                       id="exampleInputPassword1" onChange={(e)=>setReduction(e.target.value)}  placeholder="Entre reduction" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Stock</label>
                                                <input type="number" className="form-control"
                                                       id="exampleInputPassword1" onChange={(e)=>setStock(e.target.value)}  placeholder="Entre Stock" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">Disponibilite</label>
                                                <select className="form-control" onChange={(e)=>setDisponibilite(e.target.value)} >
                                                    {
                                                        dispo.map((item) =>
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputFile">Image</label>
                                                <div className="input-group">
                                                    <div className="custom-file">
                                                        <input type="file" className="form-control" onChange={(e)=>setImage(e.target.files[0])}/>
                                                    </div>
                                                    <div className="input-group-append">
                                                        <span className="input-group-text" id="">Upload</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="exampleInputPassword1">categorie de produit</label>
                                                <select className="form-control" value={category_id} onChange={(e)=>setCategory_id(e.target.value)} >
                                                    {
                                                         data.map((item) =>
                                                             <option value={item.id}>{item.name}</option>
                                                         )
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="card-footer">
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                       </div>
                      <Sidebar />
                  </div>
              </div>
         )
}
export default Addproduct;
