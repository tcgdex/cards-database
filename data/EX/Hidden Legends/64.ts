import { Card } from '../../../interfaces'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		en: "Machop",
		fr: "Machoc",
		de: "Machollo"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		66,
	],
	hp: 50,
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
				en: "Knuckle Punch",
				fr: "Coud'phalange",
				de: "Knuckle Punch"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Karate Chop",
				fr: "Poing-Karaté",
				de: "Karate Chop"
			},
			effect: {
				en: "Does 30 damage minus 10 damage for each damage counter on Machop.",
				fr: "Inflige 30 dégâts moins 10 dégâts pour chaque marqueur de dégât sur Machoc.",
				de: "Does 30 damage minus 10 damage for each damage counter on Machop."
			},
			damage: "30-",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],





}

export default card
