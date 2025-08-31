import { useEffect, useState } from "react"
import * as api from "../api/userService"
import sample from "../data/users.json"

export default function useUsers() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const load = async () => {
    setError("")
    setLoading(true)
    try {
      const data = await api.getUsers()
      setUsers(data)
    } catch (e) {
      setError("Failed to fetch users. Using local sample.")
      setUsers(sample)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [])

  const add = async payload => {
    setError("")
    setLoading(true)
    try {
      const created = await api.createUser(payload)
      const newItem = { ...created, id: Math.max(1000, ...users.map(u=>u.id||0)) + 1 }
      setUsers(prev => [newItem, ...prev])
      return { ok:true }
    } catch (e) {
      setError("Failed to create user.")
      return { ok:false }
    } finally { setLoading(false) }
  }

  const updateOne = async (id, payload) => {
    setError("")
    setLoading(true)
    try {
      await api.updateUser(id, payload)
      setUsers(prev => prev.map(u => u.id === Number(id) ? { ...u, ...payload } : u))
      return { ok:true }
    } catch (e) {
      setError("Failed to update user.")
      return { ok:false }
    } finally { setLoading(false) }
  }

  const remove = async id => {
    setError("")
    setLoading(true)
    try {
      await api.deleteUser(id)
      setUsers(prev => prev.filter(u => u.id !== id))
      return { ok:true }
    } catch (e) {
      setError("Failed to delete user.")
      return { ok:false }
    } finally { setLoading(false) }
  }

  return { users, loading, error, add, updateOne, remove, reload: load }
}