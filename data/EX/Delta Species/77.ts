import { Card } from '../../../interfaces'
import Set from '../Delta Species'

const card: Card = {
	name: {
		en: "Meowth",
		fr: "Miaouss",
		de: "Mauzi"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		52,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Pickup Power",
				fr: "Pouvoir ramassage",
				de: "Pickup Power"
			},
			effect: {
				en: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand.",
				fr: "Choisissez dans votre pile de défausse une carte Énergie, montrez-la à votre adversaire et placez-la dans votre main.",
				de: "Search your discard pile for an Energy card, show it to your opponent, and put it into your hand."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Bite"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 1,

	thirdParty: {
		cardmarket: 276840,
		tcgplayer: 87318
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "normal",
			stamp: ["set-logo"]
		}
	]
}

export default card

