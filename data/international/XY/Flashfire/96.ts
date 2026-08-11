import { Card } from 'models/database/card'
import Set from '../Flashfire'

const card: Card = {
	name: {
		'en-us': "Sacred Ash",
		'fr-fr': "Cendre Sacrée",
		'es-es': "Ceniza Sagrada",
		'it-it': "Ceneremagica",
		'pt-br': "Cinza Sagrada",
		'de-de': "Zauberasche"
	},

	illustrator: "PLANETA",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,

	effect: {
		'fr-fr': "Mélangez 5 Pokémon de votre pile de défausse avec votre deck.",
		'en-us': "Shuffle 5 Pokémon from your discard pile into your deck.",
		'es-es': "Pon 5 Pokémon de tu pila de descartes en tu baraja y baraja todas las cartas.",
		'it-it': "Rimischia cinque Pokémon dalla tua pila degli scarti nel tuo mazzo.",
		'pt-br': "Embaralhe 5 Pokémon da sua pilha de descarte no seu baralho.",
		'de-de': "Mische 5 Pokémon aus deinem Ablagestapel in dein Deck."
	},

	trainerType: "Item",

	thirdParty: {
		cardmarket: 281579,
		tcgplayer: 91233
	}
}

export default card
