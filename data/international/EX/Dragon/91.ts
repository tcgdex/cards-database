import { Card } from 'models/database/card'
import Set from '../Dragon'

const card: Card = {
	name: {
		'en-us': "Golem ex",
		'fr-fr': "Grolem ex",
		'de-de': "Geowaz ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [76],

	hp: 160,

	stage: "Basic",
	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Graveler",
		'fr-fr': "Gravalanch"
	},

	suffix: "ex",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Magnitude",
				'fr-fr': "Ampleur",
				'de-de': "Magnitude"
			},
			effect: {
				'en-us': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun des Pokémon du Banc (les vôtres et ceux de votre adversaire). (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon du Banc.)",
				'de-de': "Does 10 damage to each Benched Pokémon (both yours and your opponent's). (Don't apply Weakness and resistance for Benched Pokémon.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Double-edge",
				'fr-fr': "Damoclès",
				'de-de': "Double-edge"
			},
			effect: {
				'en-us': "Golem ex does 50 damage to itself.",
				'fr-fr': "Grolem ex s'inflige 50 dégâts.",
				'de-de': "Golem ex does 50 damage to itself."
			},
			damage: 120,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "x2"
		},
		{
			type: "Water",
			value: "x2"
		},
	],
	retreat: 5,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 85831,
				cardmarket: 275968
			},
		},
	],

}

export default card
