import { Card } from '../../../interfaces'
import Set from '../Platinum'

const card: Card = {
	name: {
		en: "Cascoon",
		fr: "Blindalys",
		de: "Panekon"
	},
	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		268,
	],
	hp: 80,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Wurmple",
		fr: "Chenipotte",
	},
	stage: "Stage1",


	attacks: [
		{

			name: {
				en: "Ascension",
				fr: "Ascension",
				de: "Ascension"
			},
			effect: {
				en: "Search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward.",
				fr: "Choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				de: "Search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Poison Thread",
				fr: "Fil empoisonné",
				de: "Poison Thread"
			},
			effect: {
				en: "The Defending Pokémon is now Poisoned.",
				fr: "Le Pokémon Défenseur est maintenant Empoisonné.",
				de: "The Defending Pokémon is now Poisoned."
			},
			damage: 20,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	retreat: 2,



}

export default card
