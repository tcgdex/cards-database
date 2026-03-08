import { Card } from '../../../interfaces'
import Set from '../Unleashed'

const card: Card = {
	name: {
		en: "Pupitar",
		fr: "Ymphect",
		de: "Pupitar"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Larvitar",
		fr: "Embrylex",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Hammer In",
				fr: "Enfoncer",
				de: "Einhämmern"
			},

			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Speed Attack",
				fr: "Attaque rapide",
				de: "Tempoangriff"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Even sealed in its shell, it can move freely. Hard and fast, it has outstanding destructive power."
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		},
	],

	thirdParty: {
		cardmarket: 279194,
		tcgplayer: 88454
	}
}

export default card
