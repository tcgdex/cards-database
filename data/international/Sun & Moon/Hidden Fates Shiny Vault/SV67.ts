import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Lycanroc-GX",
		'fr-fr': "Lougaroc-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		745,
	],
	hp: 200,
	types: [
		"Fighting",
	],
	evolveFrom: {
		'en-us': "Rockruff",
		'fr-fr': "Rocabot",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Twilight Eyes",
				'fr-fr': "Regard du Crépuscule",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may discard an Energy attached to your opponent's Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez défausser une Énergie attachée au Pokémon Actif de votre adversaire.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Accelerock",
				'fr-fr': "Vif Roc",
			},

			damage: 120,

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Splintered Shards-GX",
				'fr-fr': "Roches-Lames-GX",
			},
			effect: {
				'en-us': "This attack does 30 damage for each Energy card in your opponent's discard pile. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 30 dégâts pour chaque carte Énergie dans la pile de défausse de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
