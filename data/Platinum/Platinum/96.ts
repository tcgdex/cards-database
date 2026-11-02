import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Squirtle",
		fr: "Carapuce",
		de: "Schiggy"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [7],

	hp: 60,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Skull Bash",
				fr: "Coud'krane",
				de: "Schädelwumme"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Bite",
				fr: "Morsure",
				de: "Biss"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		en: "It shelters itself in its shell, then strikes back with spouts of water at every opportunity.",
		de: "Es zieht sich in seinen Panzer zurück und greift dann mit Wasserstrahlen seine Gegner an."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 89495,
				cardmarket: 278517
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278517,
				tcgplayer: 89495
			}
		}
	],

}

export default card
