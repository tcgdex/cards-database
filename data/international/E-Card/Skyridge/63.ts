import { Card } from 'models/database/card'
import Set from '../Skyridge'

const card: Card = {
	name: {
		'en-us': "Haunter",
		'de-de': "Alpollo"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [93],

	hp: 70,

	types: [
		"Psychic"
	],

	evolveFrom: {
		'en-us': "Gastly",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Confuse Ray",
				'de-de': "Konfustrahl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "Wirf eine Münze. Bei \"Kopf\" ist das verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Shadow Hand",
				'de-de': "Schattenhand"
			},
			effect: {
				'en-us': "You may discard up to 2 cards from your hand. If you do, draw that many cards.",
				'de-de': "Du kannst bis zu 2 Karten aus deiner Hand auf deinen Ablagestapel legen. Ziehe für jede abgelegte Karte eine neue Karte."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],
	retreat: 1,


	variants: [
		{
			type: 'normal',
			thirdParty: {
				tcgplayer: 86023,
				cardmarket: 275321
			},
		},
		{
			type: 'reverse',
			thirdParty: {
				tcgplayer: 86023,
				cardmarket: 275321
			},
		},
	],
}

export default card
