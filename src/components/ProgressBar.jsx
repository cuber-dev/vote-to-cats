

export function ProgressBar({ data }) {
    return (
      <>
        <div className="total">
          Total Votes: {data.total ? data.total : 0}
        </div>
        <div className="progress-container">
          {data.votes.map((e, i) => (
            <>
              <p key={i + 4}>Cat - 0{i + 1}</p>
              <div className="progress">
                <div
                  key={i}
                  className={`progress-bar c-${i + 1}`}
                  style={{ width: e[`cat${i + 1}`]}}
                >
                  {e[`cat${i + 1}`]}
                </div>
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
  