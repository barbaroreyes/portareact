import React ,{createContext , useState} from 'react'

const ProjectContex = createContext()
const ProjectProvider = ({children}) => {
    const [projects , setProjects] =useState()
  return (
    <ProjectContex.Provider value ={projects}>
        {children}
    </ProjectContex.Provider>
  )
}

export {ProjectProvider , ProjectContex}
