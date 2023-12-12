const Skill = () => {
  return (
    <div className="section">
      <div className="container mx-auto">
        <h2 className="text-6xl text-center">Skills</h2>
        <div>
          <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Cookies!</h2>
              <p>We are using cookies for no reason.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Accept</button>
                <button className="btn btn-ghost">Deny</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
