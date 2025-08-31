
import React, { useEffect, useState } from "react"

export default function UserForm({initial, onSubmit, loading}){
  const [name,setName]=useState(initial?.name||"")
  const [email,setEmail]=useState(initial?.email||"")
  useEffect(()=>{ setName(initial?.name||""); setEmail(initial?.email||"") },[initial])
  const handle=e=>{ e.preventDefault(); if(!name||!email) return false; return onSubmit({name,email}) }
  return (
    <form className="card" onSubmit={e=>{ if(handle(e)){} }}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
        <h2>{initial ? "Edit User" : "Add User"}</h2>
        <span className="helper">{loading ? "Working..." : "Ready"}</span>
      </div>
      <div className="grid">
        <div>
          <label className="helper">Name</label>
          <input className="input" value={name} onChange={e=>setName(e.target.value)} required />
        </div>
        <div>
          <label className="helper">Email</label>
          <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
        </div>
      </div>
      <div className="actions" style={{marginTop:12}}>
        <button className="btn btn-primary" type="button" onClick={async ()=>{ const ok = await onSubmit({name,email}); if(ok && ok.ok){} }}>Save</button>
      </div>
    </form>
  )
}
