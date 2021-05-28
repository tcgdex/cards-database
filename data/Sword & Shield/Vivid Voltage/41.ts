import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Arrokuda",
		fr: "Embrochet"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 60,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Flock",
				fr: "Nuée"
			},
			effect: {
				en: "Search your deck for up to 2 Arrokuda and put them onto your Bench. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck jusqu’à 2 Embrochet, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
			},

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Peck",
				fr: "Picpic"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	retreat: 1,
	regulationMark: "D"
}

export default card
