

const Add = () => {
  return (
    <div className="container p-3">
      <h4>Add new post</h4>
      <form>
        <div className="mb-3">
          <label className="form-label">
            Title
          </label>
          <input className="form-control" type="text"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Add;