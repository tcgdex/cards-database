import { Card } from '../../../interfaces'
import Set from '../Triumphant'

const card: Card = {
	name: {
		en: "Electrode",
		fr: "Electrode",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		101,
	],
	hp: 80,
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
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
			},

			damage: 20,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Lightning Strike",
				fr: "Frap'éclair",
			},
			effect: {
				en: "You may do 40 damage plus 60 more damage. If you do, discard all Lightning Energy attached to Electrode.",
				fr: "Vous pouvez infliger 40 dégâts plus 60 dégâts supplémentaires. Dans ce cas, défaussez toutes les cartes Énergie Lightning attachées à Electrode.",
			},
			damage: "40+",

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
