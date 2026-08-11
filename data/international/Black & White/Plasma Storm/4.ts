import { Card } from 'models/database/card'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		'en-us': "Combee",
		'fr-fr': "Apitrini",
		'es-es': "Combee",
		'it-it': "Combee",
		'pt-br': "Combee",
		'de-de': "Wadribie"
	},

	illustrator: "Yukiko Baba",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		415,
	],

	hp: 30,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Sting Missile",
				'fr-fr': "Dard-Missile",
			},
			effect: {
				'en-us': "Shuffle this Pokémon and all cards attached to it into your deck.",
				'fr-fr': "Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "This Pokémon is a set of three. When they sleep, they gather up and form a giant hive of 100 Combee.",
	},

	thirdParty: {
		cardmarket: 280744,
		tcgplayer: 84398
	}
}

export default card
