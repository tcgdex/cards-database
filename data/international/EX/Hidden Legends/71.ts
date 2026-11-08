import { Card } from 'models/database/card'
import Set from '../Hidden Legends'

const card: Card = {
	name: {
		'en-us': "Seedot",
		'fr-fr': "Grainipiot",
		'de-de': "Samurzel"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [273],

	hp: 40,

	types: [
		"Grass"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Growth Spurt",
				'fr-fr': "Jaillissement",
				'de-de': "Growth Spurt"
			},
			effect: {
				'en-us': "Attach a Grass Energy card from your hand to Seedot.",
				'fr-fr': "Attachez une carte Énergie  de votre main à Grainipiot.",
				'de-de': "Attach a  Energy card from your hand to Seedot."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Trip Over",
				'fr-fr': "Croche-pied",
				'de-de': "Trip Over"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	
	retreat: 1,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89038,
				cardmarket: 276145
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 89038,
				cardmarket: 276145
			}
		},
	]
}

export default card
