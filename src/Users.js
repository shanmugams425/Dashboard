import React from "react";
import { Link } from 'react-router-dom';



function Users() {
  let user = [
    {
      id : 1,
      name : "vivek",
      position : "CEO",
      office : "America",
      age : 20,
      startdate : "2012-02-09",
      salary : 40000
    },
    {
      id : 2,
      name : "viv",
      position : "CO",
      office : "Ameria",
      age : 20,
      startdate : "2013-02-09",
      salary : 80000
    }
  ]
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">User List</h1>
        <Link  to={"/user-create"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </Link >
      </div>

      
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
      </div>
      <div class="card-body">
        <div class="table-responsive">
          <table
            class="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </tfoot>
            <tbody>
            {
              user.map((users) => {
               return  <tr>
                <td>{users.name}</td>
                <td>{users.position}</td>
                <td>{users.office}</td>
                <td>{users.startdate}</td>
                <td>{users.age}</td>
                <td>{users.salary}</td>
                <td>
                <Link to={`/user-view/${users.id}`} className = "mr-1 btn btn-warning btn-sm">View</Link>
                  <button className = "mr-1 btn btn-primary btn-sm">Edit</button>
                  <button className = "mr-1 btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
              })
            }
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Users;
