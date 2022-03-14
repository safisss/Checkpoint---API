import React from 'react';


const UserList = ({listOfUSer}) => {

  return (
   
    <div className='UserList'>
      
      <h1 style={{color:"#E5B3BB", backgroundColor:"#C47482"}}>API List of Users</h1> 
     
        { listOfUSer.map((listofuser =>  <li style={{listStyle : "none", backgroundColor:"#E5B3BB"}}  key={listofuser.id}>

        <h3 style={{color:"white"}}><u>ID : {listofuser.id} </u> </h3>
        <h3><u>Name : {listofuser.name}</u> </h3>
        <h3><u>Username :{listofuser.username} </u></h3>
        <h3>Email : {listofuser.email} </h3>
        <p><i>Address Street : {listofuser.address.street}</i> </p>
        <p><i>Suite : {listofuser.address.suite}</i> </p>
        <p><i>City : {listofuser.address.city}</i> </p>
        <p><i>ZipCode : {listofuser.address.zipcode}</i> </p>
        <p><i>Lat : {listofuser.address.geo.lat}</i> </p>
        <p><i>Lng : {listofuser.address.geo.lng}</i> </p>
        <p>Phone : {listofuser.phone} </p>
        <h3>Website : {listofuser.website} </h3>
        <h3>Name Company : {listofuser.company.name} </h3>
        <h3>CatchPhrase : {listofuser.company.catchPhrase} </h3>
        <h3>Bs : {listofuser.company.bs} </h3>

    </li>
    
        ))}
        
    </div>
  );


};
export default UserList;