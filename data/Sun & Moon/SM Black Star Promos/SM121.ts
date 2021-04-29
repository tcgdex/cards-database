import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Raikou-GX",
		fr: "Raikou-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		243,
	],
	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig Claws",
				fr: "Creusogriffes",
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Thunder",
				fr: "Fatal-Foudre",
			},
			effect: {
				en: "Flip a coin. If tails, this Pokémon does 50 damage to itself.",
				fr: "Lancez une pièce. Si c’est pile, ce Pokémon s’inflige 50 dégâts.",
			},
			damage: 150,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Lightning",
				"Lightning",
			],
			name: {
				en: "Thunderous Rain-GX",
				fr: "Pluie Tonitruante-GX",
			},
			effect: {
				en: "This attack does 100 damage to each of your opponent's Pokémon that has any Energy attached to it. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
				fr: "Cette attaque inflige 100 dégâts à tout Pokémon de votre adversaire auquel de l’Énergie est attachée. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,



}

export default card
