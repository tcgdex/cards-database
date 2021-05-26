import { Card } from '../../../interfaces'
import Set from '../HeartGold SoulSilver'

const card: Card = {
	name: {
		en: "Mareep",
		fr: "Wattouat",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		179,
	],
	hp: 40,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Static Electricity",
				fr: "Électricité statique",
			},
			effect: {
				en: "Search your deck for a number of Lightning Energy cards up to the number of Mareep in play (both yours and your opponent's) and attach them to Mareep. Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck un nombre de cartes Énergie Lightning allant jusqu’au nombre de Wattouat en jeu (les vôtres et ceux de votre adversaire) et attachez-les à Wattouat. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Ram",
				fr: "Collision",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
