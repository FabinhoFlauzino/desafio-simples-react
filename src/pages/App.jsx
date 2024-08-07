import { useState } from 'react'
import gitLogo from '../assets/github-mark-white.svg'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import { Container } from './styles'
import Button from '../components/Button'
import { api } from '../services/api'

export default function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    const { data } = await api.get(`/repos/${currentRepo}`)

    if (data.id) {
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist) {
        setRepos(prev => [...prev, data])
        setCurrentRepo('')
        return
      }
    }

    alert('Repositório já existe na sua lista ou não foi encontrado')
  }

  const handleRemoveRepo = (id) => {
    const filter = repos.filter(repo => repo.id !== id)

    setRepos(filter)
  }

  return (
    <Container>
      <img src={gitLogo} alt="Logo" width={72} height={72} />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map((repo, index) => (
        <ItemRepo key={index} handleRemoveRepo={handleRemoveRepo} repo={repo}/>

      ))}
    </Container>
  )
}


