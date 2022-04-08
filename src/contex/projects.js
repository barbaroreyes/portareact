import React ,{createContext , useState , useEffect} from 'react'
import {API,graphqlOperation} from 'aws-amplify'
import {listProjects} from '../graphql/queries'
// import {data} from '../data'
const ProjectContex = createContext()
const ProjectProvider = ({children}) => {
    const [projects , setProjects] = useState([])
    useEffect(()=>{
        fecthprojects()
    },[])

    const fecthprojects = async () => {
        try { 
            const projectdata = await API.graphql(graphqlOperation(listProjects))
            const listData =  await projectdata.data.listProjects.items
            console.log('listData' , listData)
            setProjects(listData)
        } catch (error) {
            
        }
    }
         
  return (
    <ProjectContex.Provider value ={projects}>
        {children}
    </ProjectContex.Provider>
  )
}

export {ProjectProvider , ProjectContex}
