import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Numel",
		fr: "Chamallot",
	},
	illustrator: "Kagemaru Himeno",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		322,
	],
	hp: 70,
	types: [
		"Fire",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Draw In",
				fr: "Attirer",
			},
			effect: {
				en: "Search your discard pile for up to 2 Fire Energy cards and attach them to Numel.",
				fr: "Cherchez dans votre pile de défausse jusqu'à 2 cartes Énergie Fire et attachez-les à Chamallot.",
			},

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Combustion",
				fr: "Fournaise",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
