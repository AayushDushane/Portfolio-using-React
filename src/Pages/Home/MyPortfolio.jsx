import data from "../../data/index.json";

export default function MyPortfolio() {

  function githubHandler(){
    window.open("https://github.com/AayushDushane");
  }

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github" onClick={githubHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.175c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.807 1.306 3.492.998.108-.775.418-1.306.762-1.607-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.467-2.381 1.236-3.221-.124-.304-.536-1.528.117-3.184 0 0 1.008-.323 3.301 1.23.957-.266 1.984-.399 3.004-.404 1.02.005 2.047.138 3.006.404 2.29-1.553 3.297-1.23 3.297-1.23.656 1.656.244 2.88.12 3.184.77.84 1.235 1.91 1.235 3.221 0 4.61-2.805 5.624-5.476 5.921.43.37.812 1.102.812 2.222v3.293c0 .32.217.694.824.575C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12Z"
                fill="currentColor"
              />
            </svg>
            Visit My GitHub
          </button>
        </div>
      </div>
      <div className="portfolio--section--container">
        {data?.portfolio?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.link} className="text-sm portfolio--link">
                <span className="portfolio--link-text">View on GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  className="portfolio--link-icon"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio--section--container">
        {data?.project?.map((item, index) => (
          <div key={index} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <a href={item.link} className="text-sm portfolio--link">
                <span className="portfolio--link-text">View on GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                  className="portfolio--link-icon"
                >
                  <path
                    d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                    stroke="currentColor"
                    stroke-width="2.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
