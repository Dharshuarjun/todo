import {Link} from "react-router-dom";
function User(){
    let users=[
        {
            id:1,
            name:"Person 1",
            position:20,
            office:"chennai",
            age:20,
            startdate:"12/33/44",
            salary:30000
        },
        {
            id:2,
            name:"Person 2",
            position:22,
            office:"mumbai",
            age:20,
            startdate:"12/33/44",
            salary:50000
        },
        {
            id:3,
            name:"Person 3",
            position:21,
            office:"kolkata",
            age:20,
            startdate:"12/33/44",
            salary:60000
        }
    ]
    return(
        <>
        <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
                        For more information about DataTables, please visit the <a target="_blank"
                            href="https://datatables.net">official DataTables documentation</a>.</p>

                            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                        
                        <Link to="/portal/user/create" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Create User</Link>
                    </div>

                   
                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
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
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {
                                            users.map((user)=>{
                                                return (
                                                    <tr>
                                            <td>{user.name}</td>
                                            <td>{user.position}</td>
                                            <td>{user.office}</td>
                                            <td>{user.age}</td>
                                            <td>{user.startdate}</td>
                                            <td>{user.salary}</td>
                                            <td>
                                                <Link to ={`/portal/user/view/${user.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                                                <Link to ={`/portal/user/view/${user.id}`} className="btn btn-sm btn-primary mr-2">Edit</Link>
                                                <button className="btn btn-sm btn-danger mr-2">Delete</button>
                                            </td>
                                        </tr>
                                                );
                                            })
                                       }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    
                    </>
    )
}
export default User;