export default function NewPlayerForm() {
    return <form>
      <h1>Add Player</h1>
      <div>
      <label>Name</label>
      <input name='name'></input>
      </div>
      <div>
      <label>Breed</label>
      <input name='breed'></input> 
      </div>
      <div>
      <label>Image URL</label>
      <input name='image'></input>
      </div>
    </form>
    
}