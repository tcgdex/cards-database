import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Silvally-GX",
		'fr-fr': "Silvallié-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 210,
	types: [
		"Colorless",
	],
	evolveFrom: {
		'en-us': "Type: Null",
		'fr-fr': "Type:0",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Gyro Unit",
				'fr-fr': "Gyro-Unité",
			},
			effect: {
				'en-us': "Your Basic Pokémon in play have no Retreat Cost.",
				'fr-fr': "Vos Pokémon de base en jeu n’ont pas de Coût de Retraite.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Turbo Drive",
				'fr-fr': "Propulsion Turbo",
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
			damage: 120,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rebel-GX",
				'fr-fr': "Rebelle-GX",
			},
			effect: {
				'en-us': "This attack does 50 damage for each of your opponent's Benched Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts pour chaque Pokémon de Banc de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
