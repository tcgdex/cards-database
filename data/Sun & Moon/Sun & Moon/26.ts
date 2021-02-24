import { Card } from '../../../interfaces'
import Set from '../Sun & Moon'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
	},
	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		727,
	],
	hp: 160,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Fire Fang",
				fr: "Crocs Feu",
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Burned.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				en: "Darkest Lariat",
				fr: "Dark Lariat",
			},
			effect: {
				en: "Flip 2 coins. This attack does 100 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts multipliés par le nombre de côtés face.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
