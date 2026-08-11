import { Card } from 'models/database/card'
import Set from '../POP Series 4'

const card: Card = {
	name: {
		'en-us': "Wobbuffet",
		'fr-fr': "Qulbutoké"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [202],

	hp: 80,

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
				'en-us': "Nap",
				'fr-fr': "Tit'sieste"
			},
			effect: {
				'en-us': "Remove 2 damage counters from Wobbuffet.",
				'fr-fr': "Retirez à Qulbutoké 2 marqueurs de dégât."
			},

		},
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Expand",
				'fr-fr': "Pousstoidla"
			},
			effect: {
				'en-us': "During your opponent's next turn, any damage done to Wobbuffet is reduced by 20 (after applying Weakness and Resistance).",
				'fr-fr': "Lors du prochain tour de votre adversaire, les dégâts infligés à Qulbutoké sont réduits de 20 (après application de la Faiblesse et de la Résistance)."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "x2"
		},
	],
	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90618,
				cardmarket: 277481
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90618,
				cardmarket: 277481
			},
		},
	],

}

export default card
