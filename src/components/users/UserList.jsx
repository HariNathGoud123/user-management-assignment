import React from "react"
import { Link } from "react-router-dom"
import './userList.css'
export default function UserList({users,onDelete,q,setQ}){
  const filtered = users.filter(u => [u.name,u.email,u.phone,u.address?.city,u.company?.name].join(" ").toLowerCase().includes(q.toLowerCase()))
  return (
    <div className="card">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2>Users</h2>
        <div style={{display:"flex",gap:8}}>
          <input className="input" placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} style={{width:220}} />
          <Link to="/add-user" className="btn btn-primary">Add User</Link>
        </div>
      </div>
      <table className="table">
        <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>City</th><th>Company</th><th style={{textAlign:"right"}}>Actions</th></tr></thead>
        <tbody>
          {filtered.map(u=>(
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.phone||"-"}</td>
              <td>{u.address?.city||"-"}</td>
              <td>{u.company?.name||"-"}</td>
              <td style={{textAlign:"right"}} className="actions">
                <Link to={`/edit-user/${u.id}`} className="btn btn-muted">Edit</Link>
                <button className="btn btn-danger" onClick={()=>onDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}