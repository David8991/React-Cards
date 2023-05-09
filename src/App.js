import './App.css';
import Card from './components/card/card';

function App() {
  return (
    
    <div className="App">
      <Card  
        src={require("./images/cards/coco.jpeg")}
        alt="Тайна Коко"
        name="Тайна Коко"
        country="США, Япония"
        genre="мультфильм, фэнтези, комедия, приключения, семейный, музыка"
        tagline="«The celebration of a lifetime»"
        year="22 ноября 2017"
        isOscar={true}
        oscars={2}
      />
      <Card  
        src={require("./images/cards/gol.jpg")}
        alt="Головоломка"
        name="Головоломка"
        country="США"
        genre="мультфильм, семейный, комедия"
        tagline="«Нет слов, одни эмоции»"
        year="18 июня 2015"
        isOscar={true}
        oscars={1}
      />
      <Card  
        src={require("./images/cards/mad.jpg")}
        alt="Мадагаскар"
        name="Мадагаскар"
        country="США"
        genre="мультфильм, комедия, приключения, семейный"
        tagline="«Они не были рождены в дикой местности... Их перевезли туда...»"
        year="25 мая 2005"
        isOscar={false}
        oscars={null}
      />
    </div>
  );
}

export default App;
