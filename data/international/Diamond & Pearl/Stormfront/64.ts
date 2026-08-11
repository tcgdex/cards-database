import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Machop",
		'fr-fr': "Machoc",
		'de-de': "Machollo"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'fr-fr': "Machoc",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Kick",
				'fr-fr': "Koud'pied",
				'de-de': "Tritt"
			},

			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Knock Back",
				'fr-fr': "Engloutir",
				'de-de': "Schlag versetzen"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "+10"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It hefts a Graveler repeatedly to strengthen its entire body. It uses every type of martial arts.",
		'fr-fr': "Il muscle son corps en soulevant régulièrement un Gravalanch. Il est rompu à tous les arts martiaux."
	},

	thirdParty: {
		cardmarket: 278362,
		tcgplayer: 86997
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
