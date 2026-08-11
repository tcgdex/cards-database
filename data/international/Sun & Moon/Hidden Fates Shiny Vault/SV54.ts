import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Articuno-GX",
		'fr-fr': "Artikodin-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		144,
	],
	hp: 170,
	types: [
		"Water",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Legendary Ascent",
				'fr-fr': "Ascension Légendaire",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may switch it with your Active Pokémon. If you do, move any number of Water Energy from your other Pokémon to this Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez l’échanger avec votre Pokémon Actif. Dans ce cas, déplacez autant d’Énergies Water que vous voulez de vos autres Pokémon vers ce Pokémon.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Ice Wing",
				'fr-fr': "Aile Glace",
			},

			damage: 130,

		},
		{
			cost: [
				"Water",
			],
			name: {
				'en-us': "Cold Crush-GX",
				'fr-fr': "Écraser Net-GX",
			},
			effect: {
				'en-us': "Discard all Energy from both Active Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Défaussez toute l’Énergie des deux Pokémon Actifs. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
