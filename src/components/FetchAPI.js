import React, {useState} from 'react'

const FetchAPI = () => {

    const [users, setUsers] = useState([]);
    const [Loaded, setLoaded] = useState(false);
    const [btnClick, setBtnClick] = useState(false);

    const getUsers = async() => {
        setBtnClick(true);
        try {
            const res = await fetch("https://reqres.in/api/users?page=1");
            const jsData = await res.json();
            const userData = jsData.data;
            console.log(userData);
            setUsers(userData);
            setInterval(()=>{
                setLoaded(true);
            }, 1500);
            
        }catch(err) {
            console.log(err);
        }
    }

  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
            <h2 className="text-white">Apple</h2>
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit" onClick={getUsers}>
            Get Users
            </button>
        </nav>

        <div>
          <div className='row justify-content-center '>
            {btnClick ? (
              Loaded ? (

                <div>
                <h2>List of Apple Users</h2>
                <div className="container-fluid mt-4">
                    <div className = "row text-center">
    
                    {
                        users.map((curElem) => {
                            return (
                                <div key = {curElem.id}  className='box my-2'>
                                    <div className="col-10 col-md-4 mt-4">
                                        <div className="card p-2">
                                            <div className="d-flex align-items-center">
                                                <div className="image"> <img src= {curElem.avatar} className="rounded" width="155" alt=''/> </div>
                                                <div className="ml-3">
                                                    <h4 className="mb-0 mt-0 textLeft">{curElem.first_name+" " +curElem.last_name}</h4><span>{curElem.email}</span>
                                                </div>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
    
    
                    </div>
                </div>
            </div>

              ) : (
                <div className='col-4 mt-5'>
                  <span className='loader'></span>
                </div>
              )
            ) : (
              <div className="col-6  col-sm-8 msg">
                  Click Get Users to Fetch Data of Users
              </div>
            )}
          </div>
        </div>

        
    </>
  )
}

export default FetchAPI;