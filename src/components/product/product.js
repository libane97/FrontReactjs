import React, {Component, useEffect, useState} from "react";
import Header from "../header/header";
import Sidebar from "../sibar/Sidebar";
import {BrowserRouter as Router, Switch,Route,Link,NavLink,} from "react-router-dom";
import {Base_url_developpement as devURL} from '../../config/config';
import axios from "axios";
const Product = (props) => {
    const token = localStorage.getItem('access_token');
    console.log(token);
    if (token === null){
        props.history.push('/');
    }
    const [data,setData] = useState([]);
    useEffect(async ()=>{
        listeProduct();
    },[]);
      function listeProduct(){
             axios.get(devURL+'product/list')
                 .then(product => {
                     console.log(product.data.data);
                     let setdata = product.data.data;
                     setData(setdata);
                 }).catch(error => {
                    console.log(error);
             })
         }

    function deleted(item) {
        console.log(item);
        // eslint-disable-next-line no-restricted-globals
       let confirmation =  confirm('vous voulez supprime le produit ');
       if (confirmation == true){
           axios.delete(devURL+'product/delete/'+item.id)
               .then(response => {
                   console.log(response);
                   listeProduct();
               }).catch(error => {
               console.log(error);
           })
       }else{
           console.log(confirmation);
       }
    }

    async function search(key){
        if (key == ''){
            listeProduct();
        }
        else{
            let result = await fetch(devURL+'product/search/'+key)
            result = await result.json();
            setData(result);
        }
    }

    return(
             <div>
                 <Header />
                  <div className="container mt-5 xxl">
                      <div className="card">
                          <div className="card-header">
                              <h3 className="card-title">Les produits</h3>
                          </div>
                          <div className="card-body">
                              <div id="example1_wrapper" className="dataTables_wrapper dt-bootstrap4">
                                  <div className="row">
                                      <div className="col-sm-12 col-md-6">
                                          <div className="dataTables_length" id="example1_length">
                                              <Link to="/add" className="btn btn-primary"><i className="fa fa-plus"></i></Link>
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-6">
                                          <div id="example1_filter" className="dataTables_filter">
                                              <label><input type="search" className="form-control form-control-sm" 
                                                            placeholder="Chercher des produits avec le nom" onChange={(e)=>search(e.target.value)}
                                              aria-controls="example1"/></label></div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <table id="example1"
                                                 className="table table-bordered table-striped dataTable dtr-inline"
                                                 role="grid" aria-describedby="example1_info">
                                              <thead>
                                              <tr role="row">
                                                  <th className="sorting_asc" tabIndex="0" aria-controls="example1"
                                                      rowSpan="1" colSpan="1" aria-sort="ascending"
                                                      aria-label="Rendering engine: activate to sort column descending">
                                                      Image
                                                  </th>
                                                  <th className="sorting_asc" tabIndex="0" aria-controls="example1"
                                                      rowSpan="1" colSpan="1" aria-sort="ascending"
                                                      aria-label="Rendering engine: activate to sort column descending">
                                                      libelle
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Browser: activate to sort column ascending">Description
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Platform(s): activate to sort column ascending">Prix
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Engine version: activate to sort column ascending">
                                                      Reduction
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Stock
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Disponibilite
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Action
                                                  </th>
                                              </tr>
                                              </thead>
                                              <tbody>
                                              {
                                                  data.map((item) =>
                                                      <tr>
                                                          <td><img width="80px" height="80px" src={item.image} alt=""/></td>
                                                          <td>{item.name}</td>
                                                          <td>{item.description}</td>
                                                          <td>{item.price}</td>
                                                          <td>{item.reduction}</td>
                                                          <td>{item.stock}</td>
                                                          <td>{item.disponibilite}</td>
                                                          <td>
                                                              <td>
                                                                  <button className="btn btn-danger" onClick={()=>{deleted(item)}}><i className="fa fa-trash"></i></button>
                                                                  <Link to={"/update/"+item.id} className="btn btn-primary"><i className="fa fa-edit"></i></Link>
                                                              </td>
                                                          </td>
                                                      </tr>
                                                  )
                                              }
                                              </tbody>
                                              <tfoot>
                                              <tr role="row">
                                                  <th className="sorting_asc" tabIndex="0" aria-controls="example1"
                                                      rowSpan="1" colSpan="1" aria-sort="ascending"
                                                      aria-label="Rendering engine: activate to sort column descending">
                                                      Image
                                                  </th>
                                                  <th className="sorting_asc" tabIndex="0" aria-controls="example1"
                                                      rowSpan="1" colSpan="1" aria-sort="ascending"
                                                      aria-label="Rendering engine: activate to sort column descending">
                                                      libelle
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Browser: activate to sort column ascending">Description
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Platform(s): activate to sort column ascending">Prix
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="Engine version: activate to sort column ascending">
                                                      Reduction
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Stock
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Disponibilite
                                                  </th>
                                                  <th className="sorting" tabIndex="0" aria-controls="example1" rowSpan="1"
                                                      colSpan="1"
                                                      aria-label="CSS grade: activate to sort column ascending">
                                                      Action
                                                  </th>
                                              </tr>
                                              </tfoot>
                                          </table>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12 col-md-5">
                                          <div className="dataTables_info" id="example1_info" role="status"
                                               aria-live="polite">Showing 1 to 10 of 57 entries
                                          </div>
                                      </div>
                                      <div className="col-sm-12 col-md-7">
                                          <div className="dataTables_paginate paging_simple_numbers" id="example1_paginate">
                                              <ul className="pagination">
                                                  <li className="paginate_button page-item previous disabled"
                                                      id="example1_previous"><a href="#" aria-controls="example1"
                                                                                data-dt-idx="0" tabIndex="0"
                                                                                className="page-link">Previous</a></li>
                                                  <li className="paginate_button page-item active"><a href="#"
                                                                                                      aria-controls="example1"
                                                                                                      data-dt-idx="1"
                                                                                                      tabIndex="0"
                                                                                                      className="page-link">1</a>
                                                  </li>
                                                  <li className="paginate_button page-item "><a href="#"
                                                                                                aria-controls="example1"
                                                                                                data-dt-idx="2" tabIndex="0"
                                                                                                className="page-link">2</a>
                                                  </li>
                                                  <li className="paginate_button page-item "><a href="#"
                                                                                                aria-controls="example1"
                                                                                                data-dt-idx="3" tabIndex="0"
                                                                                                className="page-link">3</a>
                                                  </li>
                                                  <li className="paginate_button page-item "><a href="#"
                                                                                                aria-controls="example1"
                                                                                                data-dt-idx="4" tabIndex="0"
                                                                                                className="page-link">4</a>
                                                  </li>
                                                  <li className="paginate_button page-item "><a href="#"
                                                                                                aria-controls="example1"
                                                                                                data-dt-idx="5" tabIndex="0"
                                                                                                className="page-link">5</a>
                                                  </li>
                                                  <li className="paginate_button page-item "><a href="#"
                                                                                                aria-controls="example1"
                                                                                                data-dt-idx="6" tabIndex="0"
                                                                                                className="page-link">6</a>
                                                  </li>
                                                  <li className="paginate_button page-item next" id="example1_next"><a
                                                      href="#" aria-controls="example1" data-dt-idx="7" tabIndex="0"
                                                      className="page-link">Next</a></li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                 <Sidebar />
             </div>
         );
}

export default Product;