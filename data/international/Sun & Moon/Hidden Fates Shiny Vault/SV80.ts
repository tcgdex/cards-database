import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Drampa-GX",
		'fr-fr': "Draïeul-GX",
	},
	illustrator: "5ban Graphics",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		780,
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
			],
			name: {
				'en-us': "Righteous Edge",
				'fr-fr': "Lame Vertueuse",
			},
			effect: {
				'en-us': "Discard a Special Energy from your opponent's Active Pokémon.",
				'fr-fr': "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Berserk",
				'fr-fr': "Dracolère",
			},
			effect: {
				'en-us': "If your Benched Pokémon have any damage counters on them, this attack does 70 more damage.",
				'fr-fr': "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Big Wheel-GX",
				'fr-fr': "Grande Roue-GX",
			},
			effect: {
				'en-us': "Shuffle your hand into your deck. Then, draw 10 cards. (You can't use more than 1 GX attack in a game.)",
				'fr-fr': "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},

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
