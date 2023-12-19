import { Card } from '../../../interfaces'
import Set from '../Deoxys'

const card: Card = {
	name: {
		en: "Nuzleaf",
		fr: "Pifeuil",
		de: "Blanas"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		274,
	],
	hp: 70,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Seedot",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Eerie Light",
				fr: "Lumière étrange",
				de: "Eerie Light"
			},
			effect: {
				en: "The Defending Pokémon is now Confused.",
				fr: "Le Pokémon Défenseur est maintenant Confus.",
				de: "The Defending Pokémon is now Confused."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "One-Two Strike",
				fr: "En deux coups",
				de: "One-Two-Strike"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
				de: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads."
			},
			damage: "30+",

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],





}

export default card
