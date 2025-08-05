import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "Uta",
	category: "Pokemon",

	description: {
		en: "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail."
	},

	stage: "Basic",

	name: {
		en: "Charmander",
		fr: "Salamèche",
		de: "Glumanda",
		es: "Charmander",
		pt: "Charmander",
		it: "Charmander"
	},

	rarity: "None",
	dexId: [4],
	hp: 70,
	types: ["Fire"],

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Collect",
			fr: "Collecte",
			de: "Sammeln",
			es: "Coleccionar",
			pt: "Coleta",
			it: "Tassa"
		},

		effect: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
			de: "Ziehe 1 Karte.",
			es: "Roba 1 carta.",
			pt: "Compre 1 carta.",
			it: "Pesca una carta."
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			en: "Flare",
			fr: "Flamboiement",
			de: "Flackern",
			es: "Llama",
			pt: "Chama",
			it: "Fiammata"
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