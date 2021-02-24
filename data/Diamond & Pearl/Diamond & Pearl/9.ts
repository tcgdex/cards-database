import { Card } from '../../../interfaces'
import Set from '../Diamond & Pearl'

const card: Card = {
	name: {
		en: "Manaphy",
		fr: "Manaphy",
	},
	illustrator: "Nakaoka",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		490,
	],
	hp: 70,
	types: [
		"Water",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Call for Family",
				fr: "Appel à la famille",
			},
			effect: {
				en: "Search your deck for a Basic Pokémon and put it onto your Bench. Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck un Pokémon de Base et placez-le sur votre Banc. Ensuite, mélangez votre deck.",
			},

		},
		{
			cost: [
				"Water",
				"Water",
			],
			name: {
				en: "Aqua Ring",
				fr: "Anneau Hydro",
			},
			effect: {
				en: "Switch Manaphy with 1 of your Benched Pokémon.",
				fr: "Échangez Manaphy avec 1 des Pokémon de votre Banc.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 1,



}

export default card
