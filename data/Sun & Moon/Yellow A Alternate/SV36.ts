import { Card } from '../../../interfaces'
import Set from '../Yellow A Alternate'

const card: Card = {
	name: {
		en: "Diancie",
		fr: "Diancie",
	},
	illustrator: "Akira Komayama",
	rarity: "Common",
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
				en: "Sparkling Wish",
				fr: "Espoir Étincelant",
			},
			effect: {
				en: "Search your deck for a card that evolves from 1 of your Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck.",
				fr: "Cherchez dans votre deck une carte Évolution de l’un de vos Pokémon et placez-la sur ce dernier pour le faire évoluer. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Diamond Storm",
				fr: "Orage Adamantin",
			},
			effect: {
				en: "Heal 30 damage from each of your Fairy Pokémon.",
				fr: "Soignez 30 dégâts à chacun de vos Pokémon Fairy.",
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



}

export default card
