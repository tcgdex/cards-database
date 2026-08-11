import { Card } from 'models/database/card'
import Set from '../Hidden Fates'

const card: Card = {
	name: {
		'en-us': "Onix GX",
		'fr-fr': "Onix-GX",
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		95,
	],

	hp: 200,

	types: [
		"Fighting",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Bind",
				'fr-fr': "Étreinte",
			},
			effect: {
				'en-us': "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				'fr-fr': "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Impact",
				'fr-fr': "Gros Impact",
			},

			damage: 150,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rocky Avalanche GX",
				'fr-fr': "Avalanche Rocheuse-GX",
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance). (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance). (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
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

	thirdParty: {
		cardmarket: 396627,
		tcgplayer: 197680
	}
}

export default card
