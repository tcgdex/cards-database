import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Tangrowth",
		fr: "Bouldeneu",
	},
	illustrator: "nagimiso",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		465,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Tangela",
		fr: "Saquedeneu",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Grass Knot",
				fr: "Nœud Herbe",
			},
			effect: {
				en: "This attack does 30 more damage for each Colorless in your opponent's Active Pokémon's Retreat Cost.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Colorless dans le Coût de Retraite du Pokémon Actif de votre adversaire.",
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slam",
				fr: "Souplesse",
			},
			effect: {
				en: "Flip 2 coins. This attack does 80 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 80 dégâts pour chaque côté face.",
			},
			damage: 80,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
