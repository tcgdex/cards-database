import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Mightyena",
		'fr-fr': "Grahyena",
		'de-de': "Magnayen"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [262],

	hp: 70,

	types: [
		"Darkness"
	],

	evolveFrom: {
		'en-us': "Poochyena",
		'fr-fr': "Medhyèna"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bite",
				'fr-fr': "Morsure",
				'de-de': "Biss"
			},

			damage: 20,

		},
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Ambush",
				'fr-fr': "Embuscade",
				'de-de': "Hinterhalt"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 60 dégâts.",
				'de-de': "Wirf eine Münze. Bei 'Kopf' fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-30"
		},
	],


	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275690,
				tcgplayer: 87444
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275690,
				tcgplayer: 87444
			}
		},
	],

}

export default card
