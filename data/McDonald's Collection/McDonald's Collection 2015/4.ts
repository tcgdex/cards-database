import { Card } from '../../../interfaces'
import Set from '../McDonald\'s Collection 2015'

const card: Card = {
	dexId: [
		120,
	],
	set: Set,
	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false,
	},
	name: {
		en: "Staryu",
		fr: "Stari",
	},
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: [
		"Water",
	],
	stage: "Basic",
	thirdParty: {
		cardmarket: 293320,
		tcgplayer: 110431,
	},
	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Coup Rapide",
			},
			damage: "20",
			effect: {
				fr: "Lancez une pièce. Si c'est pile, cette attaque ne fait rien.",
			},
		},
	],
}

export default card
