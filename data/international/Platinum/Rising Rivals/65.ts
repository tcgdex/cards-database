import { Card } from 'models/database/card'
import Set from '../Rising Rivals'

const card: Card = {
	name: {
		'en-us': "Houndoom E4",
		'fr-fr': "Demolosse  Niv. 52",
		'de-de': "Hundemon 4"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [229],
	hp: 80,
	types: [
		"Darkness"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Corner",
				'fr-fr': "Angle",
				'de-de': "Bedrängen"
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le  Pokémon Défenseur ne peut pas battre en retraite lors du prochain tour de votre adversaire.",
				'de-de': "Das Verteidigende Pokémon kann sich im nächsten Zug deines Gegners nicht zurückziehen."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Fire Fang",
				'fr-fr': "Crocs Feu",
				'de-de': "Feuerzahn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Brûlé.",
				'de-de': "Das Verteidigende Pokémon ist jetzt verbrannt."
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278639,
				tcgplayer: 86214
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278639,
				tcgplayer: 86214
			}
		},
	],

}

export default card
