import { Card } from 'models/database/card'
import Set from '../Base Set'

const card: Card = {
	name: {
		'en-us': "Nidoran♂",
		'fr-fr': "Nidoran ♂",
		'de-de': "Nidoran M",
		'it-it': "Nidoran ♂"
	},

	illustrator: "Ken Sugimori",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		32,
	],

	hp: 40,

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
				'en-us': "Horn Hazard",
				'fr-fr': "Chanc' Korne",
				'de-de': "Gefährliches Horn",
				'it-it': "Incorna-rischio"
			},
			effect: {
				'en-us': "Flip a coin. If tails, this attack does nothing.",
				'fr-fr': "Lancez une pièce. Si c'est pile, cette attaque est sans effet.",
				'de-de': "Wirf eine Münze. Bei 'Zahl' zeigt dieser Angriff keine Wirkung.",
				'it-it': "Lancia una moneta. Se esce croce, questo attacco non infligge alcun danno."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Stiffens its ears to sense danger. The larger, more powerful of its horns secretes venom.",
		'fr-fr': "Son ouïe très fine l'avertit du danger. Plus ses cornes sont grandes, plus son poison est mortel.",
		'it-it': "Drizza le orecchie per sentire il pericolo. Il più grande e potente dei suoi corni secerne veleno.",
	},

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
			thirdParty: {
				tcgplayer: 42399
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			stamp: ["1st-edition"],
			thirdParty: {
				tcgplayer: 107052
			},
		},
		{
			type: "normal",
			subtype: "shadowless",
			thirdParty: {
				tcgplayer: 107052
			},
		},
		{
			type: "normal",
			subtype: "1999-2000-copyright",
		}
	],
}

export default card
