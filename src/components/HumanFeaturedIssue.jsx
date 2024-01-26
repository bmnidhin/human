import { useEffect, useState } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../server/firebase';
export default function HumanFeaturedIssue() {
    const [count, setCount] = useState([])

    useEffect(() => {
        getDB()
    }, [])
    async function getDB(){
        const docRef = doc(db, "ping", "PIAbOaAQ8Co5WnFSZv1L");
        const docSnap = await getDoc(docRef);
        setCount(docSnap.data())
    }
  return (
    <div>HumanFeaturedIssue {JSON.stringify(count)}</div>
  )
}
