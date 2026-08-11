import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Pachirisu",
		'fr-fr': "Pachirisu",
		'de-de': "Pachirisu"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [417],

	hp: 60,

	types: [
		"Lightning"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Tail Slap",
				'fr-fr': "Coud'Keu",
				'de-de': "Schweifschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Lightning",
			],
			name: {
				'en-us': "Pachi",
				'fr-fr': "Pachi",
				'de-de': "Brzzzl"
			},
			effect: {
				'en-us': "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
				'fr-fr': "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "A pair may be seen rubbing their cheek pouches together in an effort to share stored electricity."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 87903,
				cardmarket: 278809
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278809,
				tcgplayer: 87903
			}
		},
	],

}

export default card
