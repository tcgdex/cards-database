import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Alolan Ninetales-GX",
		'fr-fr': "Feunard d’Alola-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 210,
	types: [
		"Water",
	],
	evolveFrom: {
		'en-us': "Alolan Vulpix",
		'fr-fr': "Goupix d’Alola",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Blade",
				'fr-fr': "Lame de Glace",
			},
			effect: {
				'en-us': "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 50 dégâts à l’un des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			},

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Blizzard Edge",
				'fr-fr': "Lame Tempête",
			},
			effect: {
				'en-us': "Discard 2 Energy from this Pokémon.",
				'fr-fr': "Défaussez 2 Énergies de ce Pokémon.",
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ice Path-GX",
				'fr-fr': "Route Verglacée-GX",
			},
			effect: {
				'en-us': "Move all damage counters from this Pokémon to your opponent's Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Déplacez tous les marqueurs de dégâts de ce Pokémon vers le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
