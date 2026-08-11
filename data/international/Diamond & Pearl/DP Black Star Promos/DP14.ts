import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Chatot",
		'de-de': "Plaudagei"
	},
	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		441,
	],
	hp: 60,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Me First",
				'de-de': "Egotrip"
			},
			effect: {
				'en-us': "Draw a card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tone-Deaf",
				'de-de': "Unmusikalisch"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				'de-de': "Wirf 1 Münze. Bei 'Kopf' ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 10,

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It can learn and speak human words. If they gather, they all learn the same saying.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
