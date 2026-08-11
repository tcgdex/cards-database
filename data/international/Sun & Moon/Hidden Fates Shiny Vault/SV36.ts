import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Diancie",
		'fr-fr': "Diancie",
	},
	illustrator: "Akira Komayama",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		719,
	],
	hp: 90,
	types: [
		"Fairy",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Fairy",
			],
			name: {
				'en-us': "Sparkling Wish",
				'fr-fr': "Espoir Étincelant",
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				'fr-fr': "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				'en-us': "Diamond Storm",
				'fr-fr': "Orage Adamantin",
			},
			effect: {
				'en-us': "Heal 30 damage from each of your Fairy Pokémon.",
				'fr-fr': "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
			},
			damage: 30,

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "A sudden transformation of Carbink, its pink, glimmering body is said to be the loveliest sight in the whole world.",
	},
}

export default card
