import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Reshiram-GX",
		'fr-fr': "Reshiram-GX",
	},
	illustrator: "PLANETA Igarashi",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		643,
	],
	hp: 180,
	types: [
		"Fire",
	],


	suffix: "GX",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Flame Charge",
				'fr-fr': "Nitrocharge",
			},
			effect: {
				'en-us': "Search your deck for up to 2 Fire Energy cards and attach them to this Pokémon. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes Énergie Fire dans votre deck et attachez-les à ce Pokémon. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Scorching Column",
				'fr-fr': "Colonne Torride",
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
			},
			damage: 110,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Fire",
				"Colorless",
			],
			name: {
				'en-us': "Vermilion-GX",
				'fr-fr': "Vermillon-GX",
			},
			effect: {
				'en-us': "You may attach up to 5 Fire Energy cards from your hand to your Pokémon in any way you like. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Vous pouvez attacher jusqu’à 5 cartes Énergie Fire de votre main à vos Pokémon, de la manière que vous voulez. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: 180,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
