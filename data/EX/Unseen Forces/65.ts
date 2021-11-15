import { Card } from '../../../interfaces'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		en: "Onix",
		fr: "Onix"
	},
	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 80,
	types: [
		"Fighting",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dig Deep",
				fr: "Trou profond"
			},
			effect: {
				en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mud Slap",
				fr: "Coud'boue"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
