import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Nidoqueen",
		'fr-fr': "Nidoqueen",
		'de-de': "Nidoqueen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		31,
	],

	hp: 90,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Nidorina",
		'fr-fr': "Nidorina"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Boyfriends",
				'fr-fr': "Fiancés",
				'de-de': "Minnesänger"
			},
			effect: {
				'en-us': "Does 20 damage plus 20 more damage for each Nidoking you have in play.",
				'fr-fr': "Inflige 20 dégâts plus 20 dégâts supplémentaires pour chaque Nidoking que vous avez en jeu.",
				'de-de': "Fügt 20 Schadenspunkte plus 20 weitere für jeden Nidoking zu, den du im Spiel hast."
			},
			damage: "20+",

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Mega Punch",
				'fr-fr': "Ultimapoing",
				'de-de': "Megahieb"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 3,


	description: {
		'en-us': "Its hard scales provide strong protection. It uses its hefty bulk to execute powerful moves.",
		'fr-fr': "Ses écailles très résistantes et son corps massif sont des armes dévastatrices."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273804,
				tcgplayer: 106985
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273804,
				tcgplayer: 106985
			}
		}
	],
}

export default card
