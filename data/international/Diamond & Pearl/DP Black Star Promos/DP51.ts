import { Card } from 'models/database/card'
import Set from '../DP Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Cresselia",
		'de-de': "Cresselia"
	},
	illustrator: "Wataru Kawahara",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		488,
	],
	hp: 90,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lunar Aura",
				'de-de': "Lunar Aura"
			},
			effect: {
				'en-us': "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns.",
				'de-de': "If you have Darkrai in play, remove 1 damage counter from Cresselia between turns."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Lunar Flight",
				'de-de': "Lunar Flight"
			},
			effect: {
				'en-us': "Does 80 damage minus 10 damage for each damage counter on Cresselia.",
				'de-de': "Does 80 damage minus 10 damage for each damage counter on Cresselia."
			},
			damage: "80-",

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 2,


	description: {
		'en-us': "On nights around the quarter moon, the aurora from its tail extends and undulates beautifully.",
	},

	variants: [
		{
			type: "holo",
		}
	],
}

export default card
