import { Card } from '../../../interfaces'
import Set from '../Legendary Collection'

const card: Card = {
	name: {
		en: "Rattata"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [19],

	hp: 30,

	types: [
		"Colorless"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Bite"
			},

			damage: 20,

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
			type: "Psychic",
			value: "-30"
		},
	],

	description: {
		en: "Bites anything when it attacks. Small and very quick, it is a common sight in many places."
	},

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 274854,
				tcgplayer: 88612
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88612,
				cardmarket: 274854
			}
		}
	],

	retreat: 0
}

export default card
