import { Card } from 'models/database/card'
import Set from '../Platinum'

const card: Card = {
	name: {
		'en-us': "Cascoon",
		'fr-fr': "Blindalys",
		'de-de': "Panekon"
	},

	illustrator: "Yukiko Baba",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [268],

	hp: 80,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Wurmple",
		'fr-fr': "Chenipotte"
	},

	stage: "Stage1",

	attacks: [
		{

			name: {
				'en-us': "Ascension",
				'fr-fr': "Ascension",
				'de-de': "Ascension"
			},
			effect: {
				'en-us': "Search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward.",
				'fr-fr': "Choisissez dans votre deck une carte qui évolue de Blindalys et placez-la sur Blindalys. (Vous le faites ainsi évoluer.) Ensuite, mélangez votre deck.",
				'de-de': "Search your deck for a card that evolves from Cascoon and put it onto Cascoon. (This counts as evolving Cascoon.) Shuffle your deck afterward."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Poison Thread",
				'fr-fr': "Fil empoisonné",
				'de-de': "Poison Thread"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "The Defending Pokémon is now Poisoned."
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

	description: {
		'en-us': "It never forgets any attack it endured while in the cocoon. After evolution, it seeks payback."
	},

	variants: [
		{
			type:"normal",
			thirdParty: {
				tcgplayer: 84122,
				cardmarket: 278465
			}
		},
		{
			type:"reverse",
			thirdParty: {
				cardmarket: 278465,
				tcgplayer: 84122
			}
		}
	],

}

export default card
