import { Card } from '../../../interfaces'
import Set from '../Forbidden Light'

const card: Card = {
	name: {
		en: "Lycanroc",
		fr: "Lougaroc",
	},
	illustrator: "Megumi Mizutani",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 120,
	types: [
		"Fightning",
	],
	evolveFrom: {
		en: "Rockruff",
		fr: "Rocabot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Dangerous Rogue",
				fr: "Dangereux Truand",
			},
			effect: {
				en: "This attack does 20 more damage for each of your opponent's Benched Pokémon.",
				fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Fightning",
				"Fightning",
				"Colorless",
			],
			name: {
				en: "Accelerock",
				fr: "Vif Roc",
			},

			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
