import { ItemContainer } from "./style";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  const removeRepo = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      <div className="btn-wrapper">
        <a href={repo.html_url} target="_blank">Ver repositório</a>
        <a href="#" className="remove" onClick={removeRepo}>Remover repositório</a>
      </div>
      <hr />
    </ItemContainer>
  )
}
