import { Card } from 'models/database/card'
import Set from '../Furious Fists'

const card: Card = {
	name: {
		'en-us': "Korrina",
		'fr-fr': "Cornélia",
		'es-es': "Corelia",
		'it-it': "Ornella",
		'pt-br': "Korrina",
		'de-de': "Connie"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez un Pokémon Fighting et une carte Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Fighting Pokémon and an Item card, reveal them, and put them into your hand. Shuffle your deck afterward.",
		'es-es': "Busca en tu baraja 1 Pokémon Fighting y 1 carta de Objeto, enséñalos y ponlos en tu mano. Baraja las cartas de tu baraja después.",
		'it-it': "Cerca nel tuo mazzo un Pokémon Fighting e una carta Strumento, mostrali e aggiungili alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure em seu deck um Pokémon Fighting e um card de Item, revele-os e coloque-os na mão. Em seguida, embaralhe seus cards.",
		'de-de': "Durchsuche dein Deck nach 1 Fighting-Pokémon und 1 Itemkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 281759,
		tcgplayer: 92277
	}
}

export default card
