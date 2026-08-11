import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Team Magma's Baltoy",
		'fr-fr': "Balbuto de Team Magma",
		'de-de': "Team Magmas Puppance"
	},

	illustrator: "Atsuko Ujiie",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [343],

	hp: 50,

	types: [
		"Fighting"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				'en-us': "Night Attack",
				'fr-fr': "Attaque nocturne",
				'de-de': "Night Attack"
			},
			effect: {
				'en-us': "Put 1 damage counter on 1 of your opponent's Pokémon.",
				'fr-fr': "Placez 1 marqueur de dégât sur 1 des Pokémon de votre adversaire.",
				'de-de': "Put 1 damage counter on 1 of your opponent's Pokémon."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spinning Attack",
				'fr-fr': "Attaque tournante",
				'de-de': "Spinning Attack"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275838,
				tcgplayer: 89823
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275838,
				tcgplayer: 89823
			}
		},
	],

}

export default card
