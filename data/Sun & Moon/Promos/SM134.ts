import { Card } from '../../../interfaces'
import Set from '../Promos'

const card: Card = {
	name: {
		en: "Tornadus-GX",
		fr: "Boréas-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		641,
	],
	hp: 180,
	types: [
		"Colorless",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Gust",
				fr: "Tornade",
			},

			damage: 50,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wild Fury",
				fr: "Furie Sauvage",
			},
			effect: {
				en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
				fr: "Lancez une pièce jusqu’à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
			},
			damage: 90,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Destructive Cyclone-GX",
				fr: "Cyclone Destructeur-GX",
			},
			effect: {
				en: "Discard all Energy from your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				fr: "Défaussez toute l’Énergie du Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 130,

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
