import { Card } from '../../../interfaces'
import Set from '../Dragon Majesty'

const card: Card = {
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		555,
	],
	hp: 130,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				en: "Heat Assist",
				fr: "Assistance Fervente",
			},
			effect: {
				en: "Attach up to 3 Fire Energy cards from your hand to your Pokémon in any way you like.",
				fr: "Attachez jusqu’à 3 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Darmani-Hands",
				fr: "Daru-Mains",
			},
			effect: {
				en: "Flip 4 coins. This attack does 50 more damage for each heads.",
				fr: "Lancez 4 pièces. Cette attaque inflige 50 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
