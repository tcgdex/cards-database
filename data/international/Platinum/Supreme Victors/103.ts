import { Card } from 'models/database/card'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		'en-us': "Drifloon",
		'fr-fr': "Baudrive",
		'de-de': "Driftlon"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [425],

	hp: 40,

	types: [
		"Psychic"
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Reckless Charge",
				'fr-fr': "Attaque imprudente",
				'de-de': "Waghalsiger Sturmangriff"
			},
			effect: {
				'en-us': "Drifloon does 10 damage to itself.",
				'fr-fr': "Baudrive s'inflige 10 dégâts.",
				'de-de': "Driftlon fügt sich selbst 10 Schadenspunkte zu."
			},
			damage: 20,

		},
		{
			cost: [
				"Psychic",
			],
			name: {
				'en-us': "Collect",
				'fr-fr': "Collectionner",
				'de-de': "Sammeln"
			},
			effect: {
				'en-us': "Draw a card.",
				'fr-fr': "Piochez une carte.",
				'de-de': "Ziehe 1 Karte."
			},

		},
	],

	weaknesses: [
		{
			type: "Darkness",
			value: "+10"
		},
	],
	resistances: [
		{
			type: "Colorless",
			value: "-20"
		},
	],
	retreat: 1,

	description: {
		'en-us': "Because of the way it floats aimlessly, an old folktale calls it a \"Signpost for Wandering Spirits.\""
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 84959,
				cardmarket: 278794
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 278794,
				tcgplayer: 84959
			}
		},
	],

}

export default card
