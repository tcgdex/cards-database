import { Card } from '../../../interfaces'
import Set from '../Holon Phantoms'

const card: Card = {
	name: {
		en: "Magikarp δ",
		fr: "Magicarpe δ ESPÈCES DELTA",
		de: "Karpador"
	},
	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		129,
	],
	hp: 30,
	types: [
		"Metal",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Metal",
			],
			name: {
				en: "Splash",
				fr: "Trempette",
				de: "Platscher"
			},

			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],





}

export default card
