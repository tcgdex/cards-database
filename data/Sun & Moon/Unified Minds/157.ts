import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Druddigon",
		fr: "Drakkarmin",
	},
	illustrator: "hatachu",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		621,
	],
	hp: 120,
	types: [
		"Dragon",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drag Off",
				fr: "Traîne",
			},
			effect: {
				en: "Switch 1 of your opponent's Benched Pokémon with their Active Pokémon. This attack does 30 damage to the new Active Pokémon.",
				fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Cette attaque inflige 30 dégâts au nouveau Pokémon Actif.",
			},

		},
		{
			cost: [
				"Fire",
				"Water",
				"Colorless",
			],
			name: {
				en: "Dragon Tail",
				fr: "Draco-Queue",
			},
			effect: {
				en: "Flip 2 coins. This attack does 100 damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
