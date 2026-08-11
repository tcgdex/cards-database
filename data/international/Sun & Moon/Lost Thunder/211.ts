import { Card } from 'models/database/card'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		'en-us': "Mina",
		'fr-fr': "Oléa",
		'es-es': "Rika",
		'it-it': "Rika",
		'pt-br': "Yasmin",
		'de-de': "Matsurika"
	},

	illustrator: "You Iribi",
	rarity: "Ultra Rare",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Cherchez une carte Énergie Fairy dans votre deck et attachez-la à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		'en-us': "Search your deck for a Fairy Energy card and attach it to 1 of your Pokémon. Then, shuffle your deck.",
		'es-es': "Busca en tu baraja 1 carta de Energía Fairy y únela a 1 de tus Pokémon. Después, baraja las cartas de tu baraja.",
		'it-it': "Cerca nel tuo mazzo una carta Energia Fairy e assegnala a uno dei tuoi Pokémon. Poi rimischia le carte del tuo mazzo.",
		'pt-br': "Procure por 1 carta de Energia Fairy no seu baralho e ligue-a a 1 dos seus Pokémon. Em seguida, embaralhe o seu baralho.",
		'de-de': "Durchsuche dein Deck nach 1 Fairy-Energiekarte und lege sie an 1 deiner Pokémon an. Mische anschließend dein Deck."
	},

	trainerType: "Supporter",

	thirdParty: {
		cardmarket: 365844,
		tcgplayer: 179016
	}
}

export default card
