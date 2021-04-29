import { Card } from '../../../interfaces'
import Set from '../BW Black Star Promos'

const card: Card = {
	name: {
		en: "Zoroark",
		fr: "Zoroark",
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
		en: "Zorua",
		fr: "Zorua",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Nasty Plot",
				fr: "Machination",
			},
			effect: {
				en: "Search your deck for a card and put it into your hand. Shuffle your deck afterward.",
				fr: "Cherchez une carte dans votre deck et ajoutez-la à votre main. Mélangez ensuite votre deck.",
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Foul Play",
				fr: "Tricherie",
			},
			effect: {
				en: "Choose 1 of the Defending Pokémon's attacks and use it as this attack.",
				fr: "Choisissez 1 des attaques du Pokémon Défenseur et utilisez-la à la place de cette attaque.",
			},

		},
	],
	weaknesses: [
		{
			type: "Fightning",
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



}

export default card
