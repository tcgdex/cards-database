import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Jigglypuff",
		fr: "Rondoudou",
		de: "Pummeluff"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		39,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				en: "Singing Voice",
				fr: "Voix Harmonieuse",
				de: "Gesangsstimme"
			},

			damage: 10,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "Recordings of Jigglypuff's strange lullabies can be purchased from department stores. These CDs can be found near the bedding area.",
		de: "In der Bettenabteilung von Kaufhäusern erhält man auch CDs mit Pummeluffs wundersam einlullendem Gesang."
	},

	thirdParty: {
		cardmarket: 394602,
		tcgplayer: 197685
	}
}

export default card
