import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Stunky",
		fr: "Stunky",
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		434,
	],
	hp: 60,
	types: [
		"Darkness",
	],
	evolveFrom: {
		fr: "Moufouette",
	},
	stage: "Basic",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Gnaw and Run",
				fr: "Ronger et courrir",
			},
			effect: {
				en: "Switch Stunky with 1 of your Benched Pokémon.",
				fr: "Échangez Moufouette avec 1 des Pokémon de votre Banc.",
			},
			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				fr: "Double écorchure",
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
