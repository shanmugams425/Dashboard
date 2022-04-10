import React from 'react'

function CreateUser() {
  return (
    <div className='container'>
      <form>
      <div>
        <div className='col-lg-6'>
                <label >Name</label>
                <input type={"text"} className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Position</label>
                <input type={"text"} className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Office</label>
                <input type={"text"} className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Age</label>
                <input type={"number"} className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Start date</label>
                <input type={"Date"} className='form-control'></input>
            </div>

            <div className='col-lg-6'>
                <label >Salary</label>
                <input type={"text"} className='form-control'></input>
            </div>

            <div className='col-lg-6  m-5'>
                <input type={"submit"} className='btn btn-primary '></input>
            </div>
            </div>
      </form>
    </div>
  )
}

export default CreateUser 