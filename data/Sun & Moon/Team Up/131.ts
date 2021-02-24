import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Lugia",
		fr: "Lugia",
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		249,
	],
	hp: 130,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Power Charger",
				fr: "Charge Puissance",
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
				fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Blasting Wind",
				fr: "Vent Impitoyable",
			},

			damage: 110,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fightning",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
