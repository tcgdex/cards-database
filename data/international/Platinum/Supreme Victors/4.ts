import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Electivire FB",
		'fr-fr': "Elekable FB",
		'de-de': "Elevoltek FB"
	},
	illustrator: "Hironobu Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",

	set: Set,
	dexId: [466],
	hp: 90,
	types: [
		"Lightning"
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dump and Draw",
				'fr-fr': "Jeter et piocher",
				'de-de': "Wegwerfen und Ziehen"
			},
			effect: {
				'en-us': "Discard up to 2 Energy cards from your hand. For each card you discarded, draw 2 cards.",
				'fr-fr': "Défaussez jusqu'à 2 cartes Énergie de votre main. Pour chaque carte défaussée, piochez 2 cartes.",
				'de-de': "Lege bis zu 2 Energiekarten von deiner Hand auf deinen Ablagestapel. Ziehe für jede auf diese Weise auf den Ablagestapel gelegte Karte 2 Karten."
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Electric Current",
				'fr-fr': "Courant électrique",
				'de-de': "Fließende Elektrizität"
			},
			effect: {
				'en-us': "Move a Lightning Energy card attached to Electivire FB to 1 of your Benched Pokémon.",
				'fr-fr': "Déplacez une carte Énergie Lightning attachée à Elekable  sur 1 de vos Pokémon de Banc.",
				'de-de': "Entferne 1 an Elevoltek FB angelegte -Energiekarte und lege sie an 1 Pokémon auf deiner Bank an."
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
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 3,

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 278695,
				tcgplayer: 85125
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278695,
				tcgplayer: 85125
			}
		},
	],

}

export default card
