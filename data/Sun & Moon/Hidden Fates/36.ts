import { Card } from '../../../interfaces'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		en: "Onix-GX",
		fr: "Onix-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		95,
	],
	hp: 200,
	types: [
		"Fightning",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fightning",
			],
			name: {
				en: "Bind",
				fr: "Étreinte",
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Heavy Impact",
				fr: "Gros Impact",
			},

			damage: 150,

		},
		{
			cost: [
				"Fightning",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rocky Avalanche-GX",
				fr: "Avalanche Rocheuse-GX",
			},
			effect: {
				en: "During your opponent's next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance). (You can't use more than 1 GX attack in a game.)",
				fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance). (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 200,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
