import { Card } from 'models/database/card'
import Set from '../Undaunted'

const card: Card = {
	name: {
		'en-us': "Hariyama",
		'fr-fr': "Hariyama",
		'de-de': "Hariyama"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [297],

	hp: 100,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Makuhita",
		'fr-fr': "Makuhita"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hammer In",
				'fr-fr': "Enfoncer",
				'de-de': "Einhämmern"
			},

			damage: 60,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Backward Belt Throw",
				'fr-fr': "Projection arrière",
				'de-de': "Rückwärtsgürtelwurf"
			},
			effect: {
				'en-us': "You may do 80 damage plus 20 more damage. If you do, Hariyama does 20 damage to itself.",
				'fr-fr': "Vous pouvez infliger 80 dégâts plus 20 dégâts supplémentaires. Dans ce cas, Hariyama s’inflige 20 dégâts.",
				'de-de': "Dieser Angriff kann 80 Schadenspunkte plus 20 weitere Schadenspunkte zufügen. In diesem Fall fügt Hariyama sich selbst 20 Schadenspunkte zu."
			},
			damage: "80+",

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
		'en-us': "It loves challenging others to tests of strength. It has the power to stop a train with a slap."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 279267,
				tcgplayer: 86016
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279267,
				tcgplayer: 86016
			}
		}
	],

}

export default card
