import { Card } from 'models/database/card'
import Set from '../POP Series 1'

const card: Card = {
	name: {
		'en-us': "Armaldo ex",
		'fr-fr': "Armaldo ex"
	},

	illustrator: "Hikaru Koike",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [348],

	hp: 160,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Anorith",
		'fr-fr': "Anorith"
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Twin-blade",
				'fr-fr': "Double épée"
			},
			effect: {
				'en-us': "Does 30 damage to each Defending Pokémon.",
				'fr-fr': "Inflige 30 dégâts à chacun des Pokémon Défenseurs."
			},

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
				'en-us': "Supersonic Claws",
				'fr-fr': "Griffes supersoniques"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Grass"
		},
		{
			type: "Water"
		},
	],

	suffix: "EX",
	retreat: 3,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 83623,
				cardmarket: 277430
			},
		},
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 97806,
				cardmarket: 277430
			},
		},
	],

}

export default card
