import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Basculin",
		fr: "Bargantua",
	},
	illustrator: "SATOSHI NAKAI",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		550,
	],
	hp: 80,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swarming Bites",
				fr: "Armada Mordante",
			},
			effect: {
				en: "This attack does 20 damage for each Basculin you have in play to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Pour chaque Bargantua que vous avez en jeu, cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge",
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
