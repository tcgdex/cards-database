import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'de-de': "Tangela"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [114],
	
	hp: 60,

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
				'en-us': "Collect",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'de-de': "Ziehe 1 Karte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Stun Spore",
				'de-de': "Stachelspore"
			},
			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
				'de-de': "Wirf 1 Münze. Bei \"Kopf\" ist das Verteidigende Pokémon jetzt gelähmt."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+10"
		},
	],

	resistances: [
		{
			type: "Water",
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		'en-us': "The blue vines shrouding its body are covered in a growth of fine hair. It is known to be ticklish."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89747,
				cardmarket: 278948
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278948,
				tcgplayer: 89747
			}
		},
	],

}

export default card
