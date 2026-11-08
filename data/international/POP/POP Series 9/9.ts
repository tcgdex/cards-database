import { Card } from 'models/database/card'
import Set from '../POP Series 9'

const card: Card = {
	name: {
		'en-us': "Lopunny",
		'fr-fr': "Lockpin"
	},

	illustrator: "Midori Harada",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [428],

	hp: 80,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Bastiodon",
		'fr-fr': "Laporeille"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jump Kick",
				'fr-fr': "Pied Saute"
			},
			effect: {
				'en-us': "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 20 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Jazzed",
				'fr-fr': "Plein d'entrain"
			},
			effect: {
				'en-us': "If Lopunny evolved from Buneary during this turn, remove all damage counters from Lopunny.",
				'fr-fr': "Si Lockpin évolue de Laporeille lors de ce tour, retirez à Lockpin tous ses marqueurs de dégât."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "It is very conscious of its looks and never fails to groom its ears. It runs with sprightly jumps.",
		'fr-fr': "Il est très coquet et n'oublie jamais de toiletter ses oreilles. Il avance en bonds énergiques."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86825,
				cardmarket: 278560
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 86825,
				cardmarket: 278560
			},
		},
	],

}

export default card
