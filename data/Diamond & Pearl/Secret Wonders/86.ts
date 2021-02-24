import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Duskull",
		fr: "Skélénox",
	},
	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		355,
	],
	hp: 50,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Psychic",
			],
			name: {
				en: "Astonish",
				fr: "Tissu Fauche",
			},
			effect: {
				en: "Flip a coin. If heads, choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
				fr: "Skélénox peut évoluer lors du tour où il est joué.",
			},

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				fr: "Étonnement",
			},
			effect: {
				fr: "Lancez une pièce. Si c'est face, choisissez sans regarder 1 carte de la main de votre adversaire. Regardez la carte et demandez à votre adversaire de la mélanger à son deck.",
			},

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
