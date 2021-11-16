import { Card } from '../../../interfaces'
import Set from '../Crystal Guardians'

const card: Card = {
	name: {
		en: "Shuppet",
		fr: "Polichombr"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		353,
	],
	hp: 40,
	types: [
		"Psychic",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Ascension",
				fr: "Ascension"
			},
			effect: {
				en: "Search your deck for a card that evolves from Shuppet and put it onto Shuppet. (This counts as evolving Shuppet.) Shuffle your deck afterward.",
				fr: "Cherchez dans votre deck une carte évoluant de Polichombr et placez-la sur Polichombr (vous le faites ainsi évoluer). Ensuite, mélangez votre deck."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Tackle",
				fr: "Charge"
			},

			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Darkness",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
