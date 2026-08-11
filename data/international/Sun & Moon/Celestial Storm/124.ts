import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Apricorn Maker",
		'fr-fr': "Artisan de Noigrumes",
		'es-es': "Productor de Bonguris",
		'it-it': "Costruttore di Apricorn",
		'pt-br': "Fabricador de Bolota",
		'de-de': "Aprikoko-Hersteller"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez dans votre deck jusqu’à 2 cartes Objet contenant le mot « Ball » dans leur nom, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for up to 2 Item cards that have the word \"Ball\" in their name, reveal them, and put them into your hand. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja hasta 2 cartas de Objeto que tengan la palabra \"Ball\" en su nombre, enséñalas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo fino a due carte Strumento con “Ball” nel nome, mostrale e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por até 2 cartas de Item no seu baralho que tenham a palavra “Bola” no seu nome, revele-as e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach bis zu 2 Itemkarten, bei denen das Wort „Ball“ zum Namen gehört, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 361363,
		tcgplayer: 170985
	}
}

export default card
