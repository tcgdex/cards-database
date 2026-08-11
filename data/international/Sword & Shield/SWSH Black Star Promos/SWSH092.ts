import { Card } from 'models/database/card'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Uta",
	category: "Pokemon",

	description: {
		'en-us': "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	stage: "Basic",

	name: {
		'en-us': "Charmander",
		'fr-fr': "Salamèche",
		'de-de': "Glumanda",
		'es-es': "Charmander",
		'pt-br': "Charmander",
		'it-it': "Charmander"
	},

	rarity: "Promo",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Collect",
			'fr-fr': "Collecte",
			'de-de': "Sammeln",
			'es-es': "Coleccionar",
			'pt-br': "Coleta",
			'it-it': "Tassa"
		},

		effect: {
			'en-us': "Draw a card.",
			'fr-fr': "Piochez une carte.",
			'de-de': "Ziehe 1 Karte.",
			'es-es': "Roba 1 carta.",
			'pt-br': "Compre 1 carta.",
			'it-it': "Pesca una carta."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			'en-us': "Flare",
			'fr-fr': "Flamboiement",
			'de-de': "Flackern",
			'es-es': "Llama",
			'pt-br': "Chama",
			'it-it': "Fiammata"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	},

	regulationMark: "D",

	thirdParty: {
		cardmarket: 547031
	}
}

export default card
