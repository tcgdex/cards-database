import { Card } from '../../../interfaces'
import Set from '../HGSS Black Star Promos'

const card: Card = {
	name: {
		en: "Raikou",
		fr: "Raikou"
	},
	illustrator: "Noriko Hotta",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 80,
	types: [
		"Lightning",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				en: "Zap Cannon",
				fr: "Elecanon"
			},
			effect: {
				en: "During your next turn, Raikou can't use Zap Cannon.",
				fr: "Lors de votre prochain tour, Raikou ne pourra pas utiliser Elecanon."
			},
			damage: 70,

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

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
