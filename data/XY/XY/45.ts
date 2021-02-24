import { Card } from '../../../interfaces'
import Set from '../XY'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Électrode",
	},
	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 90,
	types: [
		"Lightning",
	],
	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Lightning",
			],
			name: {
				en: "Eerie Impulse",
				fr: "Ondes Étranges",
			},
			effect: {
				en: "Flip a coin. If heads, discard an Energy attached to 1 of your opponent's Pokémon.",
				fr: "Lancez une pièce. Si c'est face, défaussez une Énergie attachée à l'un des Pokémon de votre adversaire.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
