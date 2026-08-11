import { Card } from 'models/database/card'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		'en-us': "Misdreavus",
		'fr-fr': "Feuforêve",
		'de-de': "Traunfugil"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [200],

	hp: 60,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Mumble",
				'fr-fr': "Marmonner",
				'de-de': "Grummeln"
			},

			damage: 10,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Dual Draw",
				'fr-fr': "Pioche mutuelle",
				'de-de': "Doppelzug"
			},
			effect: {
				'en-us': "Each player draws 3 cards.",
				'fr-fr': "Chaque joueur pioche 3 cartes.",
				'de-de': "Jeder Spieler zieht 3 Karten."
			},

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
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,


	description: {
		'en-us': "It loves to bite and yank people's hair from behind without warning, just to see their shocked reactions.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87512,
				cardmarket: 279708
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 87512,
				cardmarket: 279708
			},
		},
	],

}

export default card
