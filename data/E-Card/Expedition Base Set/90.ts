import { Card } from '../../../interfaces'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		en: "Lickitung",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [108],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex"
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Long Tongue",
				fr: "Coup d'boule",
				de: "Kopfnuss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88447,
				cardmarket: 274965
			},
		},
		{
			type: "reverse",
		}
	],
}

export default card
