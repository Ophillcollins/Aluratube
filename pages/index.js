import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "./src/components/CSSReset";
import Menu from "./src/components/Menu";
import { StyledTimeline } from "./Timeline";

function HomePage() {
  const estilosDaHomePage = { /* backgroundColor: "red" */ };

  // console.log(config.playlists);

  return (
    <>
      <CSSReset />
      <div style={estilosDaHomePage}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          oi
        </Timeline>
      </div>
    </>
  );
}

export default HomePage


const StyledHeader = styled.div`
    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
     }
     .user-info {
      margin-top: 50px;
      display: flex;
      align-itens: center;
      width: 100%;
      padding: 16px 32px;
      gap: ;
     }
     `;

function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>
            {config.name}
          </h2>
          <p>
            {config.job}
          </p>
        </div>
      </section>
    </StyledHeader>
  )
}
function Timeline(propriedades) {
  console.log("Dentro do compomente", propriedades.playlists);
  const playlistNames = Object.keys(propriedades.playlists);

  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        console.log(playlistName);
        console.log(videos);
        return (
            <section>
            <h2>{playlistName}</h2> 
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>
                      {video.title}
                    </span>
                  </a>
                )
              })}
            </div>
          </section>
        )
      })}
          </StyledTimeline>

  )
}







