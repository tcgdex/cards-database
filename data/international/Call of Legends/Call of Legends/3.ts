import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Dialga",
		'fr-fr': "Dialga",
		'de-de': "Dialga"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [483],

	hp: 100,

	types: [
		"Metal"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Time Rewind",
				'fr-fr': "Retour temporel",
				'de-de': "Zeit zurückdrehen"
			},
			effect: {
				'en-us': "Shuffle your hand into your deck.",
				'fr-fr': "Mélangez votre main avec votre deck.",
				'de-de': "Mische deine Handkarten in dein Deck."
			},
			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "x2"
		},
	],
	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],
	retreat: 3,

	description: {
		'en-us': "This Pokémon completely controls the flow of time. It uses its power to travel at will through the past and future.",
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84806,
				cardmarket: 279640
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 84806,
				cardmarket: 279640
			},
		},
	],

}

export default card
