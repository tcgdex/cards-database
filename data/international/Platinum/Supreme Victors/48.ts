import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Zapdos",
		'fr-fr': "Electhor",
		'de-de': "Zapdos"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [145],

	hp: 100,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Drill Peck",
				'fr-fr': "Bec vrille",
				'de-de': "Bohrschnabel"
			},

			damage: 30,

		},
		{
			cost: [
				"Lightning",
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Lightning Wing",
				'fr-fr': "Aile éclair",
				'de-de': "Blitzflügel"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 50 dégâts plus 20 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 50 Schadenspunkte plus 20 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 2,

	description: {
		'en-us': "A legendary Pokémon that is said to live in thunderclouds. It freely controls lightning bolts."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 90718,
				cardmarket: 278739
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278739,
				tcgplayer: 90718
			}
		},
	],

}

export default card
