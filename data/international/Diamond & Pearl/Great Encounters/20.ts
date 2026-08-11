import { Card } from 'models/database/card'
import Set from '../Great Encounters'

const card: Card = {
	name: {
		'en-us': "Kingler",
		'fr-fr': "Krabboss",
		'de-de': "Kingler"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		99,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		'en-us': "Krabby",
		'fr-fr': "Krabby",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Crabhammer",
				'fr-fr': "Pince-masse",
				'de-de': "Krabbhammer"
			},

			damage: 30,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Scissor Blow",
				'fr-fr': "Cou d'ciseaux",
				'de-de': "Scherenschlag"
			},
			effect: {
				'en-us': "If the Defending Pokémon would be Knocked Out by this attack, Kingler does 30 damage to itself.",
				'fr-fr': "Si le Pokémon Défenseur est mis K.O par cette attaque, Krabboss s'inflige 30 dégâts.",
				'de-de': "Wenn das Verteidigende Pokémon durch diesen Angriff kampfunfähig würde, fügt Kingler sich selbst 30 Schadenspunkte zu."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "The larger pincer has 10,000-horsepower strength. However, it is so heavy, it is difficult to aim.",
	},

	thirdParty: {
		cardmarket: 277922,
		tcgplayer: 86457
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
