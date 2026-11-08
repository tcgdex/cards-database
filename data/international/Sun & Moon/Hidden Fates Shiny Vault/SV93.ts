import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Tapu Koko-GX",
		'fr-fr': "Tokorico-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",


	dexId: [785],
	set: Set,

	hp: 170,
	types: [
		"Lightning",
	],


	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Aero Trail",
				'fr-fr': "Sentier Aérien",
			},
			effect: {
				'en-us': "When you play this Pokémon from your hand onto your Bench during your turn, you may move any number of Lightning Energy from your other Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
				'fr-fr': "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos autres Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Sky-High Claws",
				'fr-fr': "Griffes Gratte-Ciel",
			},

			damage: 130,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Tapu Thunder-GX",
				'fr-fr': "Toko Tonnerre-GX",
			},
			effect: {
				'en-us': "This attack does 50 damage times the amount of Energy attached to all of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 50,

		},
	],


	retreat: 2,



}

export default card
