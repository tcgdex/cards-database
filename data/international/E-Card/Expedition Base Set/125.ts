import { Card } from 'models/database/card'
import Set from '../Expedition Base Set'

const card: Card = {
	name: {
		'en-us': "Poliwag",
		'fr-fr': "Ptitard",
		'de-de': "Quapsel"
	},

	illustrator: "Yuka Morii",
	rarity: "Common",
	category: "Pokemon",
	effect: {
		'en-us': "Attach Healing Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool card attached to it. If that Pokémon is Knocked Out, discard this card. At the end of any turn, if the Pokémon this card is attached to has 20 HP or less, remove 3 damage counters from that Pokémon and discard this card.",
	},
	trainerType: "Tool",
	set: Set,

	dexId: [60],

	hp: 50,

	types: [
		"Water"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Headbutt",
				'fr-fr': "Coup d'boule",
				'de-de': "Kopfnuss"
			},

			damage: 10,

		},
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Rollout",
				'fr-fr': "Roulade",
				'de-de': "Walzer"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "x2"
		},
	],
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 88256,
				cardmarket: 275000
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 88256,
				cardmarket: 275000
			},
		},
	],
}

export default card
