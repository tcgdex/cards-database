import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Chatot",
		fr: "Pijako",
	},
	illustrator: "Satoshi Ohta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		441,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Nosedive",
				fr: "Descendre en piqué",
			},
			effect: {
				en: "Flip a coin. If tails, Chatot does 10 damage to itself.",
				fr: "Lancez une pièce. Si c'est pile, Pijako s'inflige 10 dégâts.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
