import { Card } from 'models/database/card'
import Set from '../Arceus'

const card: Card = {
	name: {
		'en-us': "Tangela",
		'de-de': "Tangela"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [114],
	
	hp: 70,

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
				'en-us': "Absorb",
				'de-de': "Absorber"
			},
			effect: {
				'en-us': "Remove 1 damage counter from Tangela.",
				'de-de': "Entferne 1 Schadensmarke von Tangela."
			},
			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Sleep Powder",
				'de-de': "Schlafpuder"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'de-de': "Das Verteidigende Pokémon schläft jetzt."
			},
			damage: 20,

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

	retreat: 2,

	description: {
		'en-us': "The blue vines shrouding its body are covered in a growth of fine hair. It is known to be ticklish."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 89746,
				cardmarket: 278948
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278948,
				tcgplayer: 89746
			}
		},
	],

}

export default card
