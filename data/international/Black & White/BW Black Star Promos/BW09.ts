import { Card } from 'models/database/card'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Zoroark",
		'fr-fr': "Zoroark",
	},
	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		571,
	],
	hp: 100,
	types: [
		"Darkness",
	],
	evolveFrom: {
		'en-us': "Zorua",
		'fr-fr': "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Nasty Plot",
				'fr-fr': "Machination",
			},
			effect: {
				'en-us': "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				'fr-fr': "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Foul Play",
				'fr-fr': "Tricherie",
			},
			effect: {
				'en-us': "Choose 1 of the Defending Pokémon's attacks and use it as this attack.",
				'fr-fr': "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la à la place de cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,




	description: {
		'en-us': "Each has the ability to fool a large group of people simultaneously. They protect their lair with illusory scenery.",
	},
}

export default card
