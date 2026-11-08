import { Card } from 'models/database/card'
import Set from '../Sandstorm'

const card: Card = {
	name: {
		'en-us': "Breloom",
		'fr-fr': "Chapignon",
		'de-de': "Kapilz"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [286],

	hp: 70,

	types: [
		"Grass"
	],

	evolveFrom: {
		'en-us': "Shroomish",
		'fr-fr': "Balignon"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Super Poison Breath",
				'fr-fr': "Super haleine empoisonnée",
				'de-de': "Super Poison Breath"
			},
			effect: {
				'en-us': "Each Defending Pokémon is now Poisoned.",
				'fr-fr': "Chaque Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Each Defending Pokémon is now Poisoned."
			},

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Sky Uppercut",
				'fr-fr': "Stratopercut",
				'de-de': "Sky Uppercut"
			},
			effect: {
				'en-us': "This attack's damage is not affected by Resistance.",
				'fr-fr': "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
				'de-de': "This attack's damage is not affected by Resistance."
			},
			damage: 50,

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
				cardmarket: 275810,
				tcgplayer: 83954
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275810,
				tcgplayer: 83954
			}
		},
	],

}

export default card
