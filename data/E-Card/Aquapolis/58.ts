import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Seadra",
		fr: "Hypocéan"
	},
	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		117,
	],
	hp: 70,
	types: [
		"Water",
	],
	evolveFrom: {
		en: "Horsea",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Water",
			],
			name: {
				en: "Wave Splash",
				fr: "Grosse vague"
			},

			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Water Bullet",
				fr: "Cartouche d'O"
			},
			effect: {
				en: "Flip a number of coins equal to the number of Energy attached to Seadra. This attack does 30 damage plus 10 more damage for each heads.",
				fr: "Lancez un nombre de pièces équivalent au nombre d'Énergies  attachées à Hypocéan. Cette attaque inflige 30 dégâts plus 10 dégâts supplémentaires pour chaque face."
			},
			damage: "30+",

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
