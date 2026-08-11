import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Lucario-GX",
		'fr-fr': "Lucario-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 210,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Riolu",
		'fr-fr': "Riolu",
	},

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Aura Strike",
				'fr-fr': "Aura Frappante",
			},
			effect: {
				'en-us': "If this Pokémon evolved from Riolu during this turn, this attack does 90 more damage.",
				'fr-fr': "Si ce Pokémon a évolué de Riolu pendant ce tour, cette attaque inflige 90 dégâts supplémentaires.",
			},
			damage: 30,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Cyclone Kick",
				'fr-fr': "Pied Cyclone",
			},

			damage: 130,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cantankerous Beatdown-GX",
				'fr-fr': "Dérouillée Revêche-GX",
			},
			effect: {
				'en-us': "This attack does 30 damage for each damage counter on this Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque marqueur de dégâts placé sur ce Pokémon. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
