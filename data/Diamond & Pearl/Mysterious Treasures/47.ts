import { Card } from '../../../interfaces'
import Set from '../Mysterious Treasures'

const card: Card = {
	name: {
		en: "Dunsparce",
		fr: "Insolourdo",
		de: "Dummisel"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		206,
	],

	hp: 60,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{

			name: {
				en: "Snake Hook",
				fr: "Crochet de serpent",
				de: "Schlangenhaken"
			},
			effect: {
				en: "Draw a card.",
				fr: "Piochez une carte.",
				de: "Ziehe 1 Karte."
			},

		},
		{

			name: {
				en: "Bite and Run",
				fr: "Mordre et courrir",
				de: "Zubeißen und Abhauen"
			},
			effect: {
				en: "Switch Dunsparce with 1 of your Benched Pokémon.",
				fr: "Échangez Insolourdo avec 1 de vos Pokémon de Banc.",
				de: "Tausche Dummisel gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],

	description: {
		fr: "Son nid est un véritable labyrinthe qu'il creuse à l'aide de sa queue. Il sait à peine voler."
	},

	thirdParty: {
		cardmarket: 277676
	}
}

export default card
