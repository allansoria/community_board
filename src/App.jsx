import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const gameList = [
  { 'name': 'The Blood of Dawnwalker', 'description': "14th-century Europe. Bloody conflicts sweep the lands, and the Black Death comes for the survivors. It's a moment of weakness - and that's all they needed. Vampires seize their opportunity to walk out of the shadows and claim what they've been denied for centuries: freedom, and the power that comes with it.", 'image': 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3751260/a7062f3b59d491c2678e3fd7ce2672858e480641/header.jpg?t=1780740503' },
  { 'name': 'Final Fantasy VII Revelation', 'description': 'The final battle to decide the fate of the world has begun. Take to the skies, chart your course, and stand with your companions against Sephiroth one last time. A vast planet awaits. Everything leads here.', 'image': 'https://www.square-enix.com/ffvii/assets/revelation/images/common/KV-desktop_1x.webp' },
  { 'name': 'Stellar Blade: Blood Rain', 'description': 'Stellar Blade: BLOOD RAIN is the next chapter in the acclaimed action-adventure franchise from SHIFT UP. BLOOD RAIN will continue the story beyond the events of the first game and introduce a new protagonist, Evie.', 'image': 'https://www.gematsu.com/wp-content/uploads/2026/06/Stellar-Blade-Blood-Rain-Ann_06-05-26-768x432.jpg' },
  { 'name': 'The Wolf Among Us 2', 'description': 'The Wolf Among Us 2 returns players to Fabletown in a dark neon-noir thriller that expands the acclaimed series in bold and ambitious new ways.', 'image': 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRGxMuCgRS9bilAvvhrokTTcR-pY06XESql95znkFFYNpL_qMFO' }, 
  { 'name': 'Attack on Titan 3', 'description': 'Experience the story from beginning to end in the definitive culmination of the Attack on Titan game series.', 'image': 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2916700/86ab8f2c17c9ba112ca8ba30cc7a78785f50333e/header.jpg?t=1780702715' },
  { 'name': 'Star Wars: Zero Company', 'description': 'Command an elite squad through a gritty and authentic story in STAR WARS Zero Company™, a single-player turn-based tactics game set in the twilight of the Clone Wars.', 'image': 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2075800/5da4e18b40484133a9f5a45953a2539638f5b29d/header.jpg?t=1780707713' },
  { 'name': 'Virtua Fighter Crossroads', 'description': "Dive into a rich, cinematic single-player adventure experience that blends story-driven action with VF's signature intense combat.", 'image': 'https://www.gematsu.com/wp-content/uploads/2026/06/Virtua-Fighter-Crossroads_2026_06-05-26_031-768x432.jpg' },
  { 'name': '1666 Amsterdam', 'description': 'Every 333 years, something stirs. 1666: Amsterdam is a 3rd person Dark, Story-Led, Action-Adventure where Noa, the Collector, wields witchcraft to uncover demonic entities hiding behind human faces. Investigate by day. Face your demons at night.', 'image': 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3949550/af0f78263d27c95d6b1eb6af13352299fbac3e07/header.jpg?t=1780695461' },
 {'name': 'Gundam Rogue Orbit', 'description': 'Become the pilot you were born to be. Change humanity’s fate in GUNDAM ROGUE ORBIT, a high-mobility action game that delivers a bold new take on Gundam, blending a fast-paced cinematic story with intense, hard-hitting combat in an all-new universe.', 'image': 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1963680/05277222f206b5e7638dc7e4df3693242e1de58e/header.jpg?t=1780749427' },
 {'name': 'Teenage Mutant Ninja Turtles: The Last Ronin', 'description': 'In a future, battle-ravaged New York City, a lone surviving Turtle embarks on a seemingly hopeless mission seeking justice for the family he lost.', 'image': 'https://gameinformer.com/sites/default/files/styles/content_header_max/public/2026/06/03/c03ae636/TMNT-The-Last-Ronin.jpg.webp' } ];

  const cardList = gameList.map((game, index) => (
    <div key={index} className="card">
      <img src={game.image} alt={game.name} />
      <h2>{game.name}</h2>
      <p>{game.description}</p>
      
    </div>
  ));

  return (
    <>
      <div id="App">
        <h1 id="title"> Game Summer Fest Announcements </h1>
        <div id="board">
          {cardList}
        </div>

      </div>



    </>
  )
}

export default App
