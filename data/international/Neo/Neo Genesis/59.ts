import { Card } from 'models/database/card'
import Set from '../Neo Genesis'

const card: Card = {
	name: {
		'en-us': "Gligar",
		'fr-fr': "Scorplane",
		'de-de': "Skorgla"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		207,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],

			name: {
				'en-us': "Poison Sting",
				'fr-fr': "Dard-venin",
				'de-de': "Poison Sting"
			},

			effect: {
				'en-us': "Flip a coin. If heads, the Defending Pokémon is now Poisoned.",
				'fr-fr': "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Flip a coin. If heads, the Defending Pokémon is now Poisoned."
			},

			damage: 10
		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Slash"
			},

			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	description: {
		'en-us': "It flies straight at its target's face, then clamps down on the startled victim to inject poison.",
		'fr-fr': "Il vole droit sur le visage de sa cible, et s'accroche ensuite à sa victime effrayée pour lui injecter du poison."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 274459,
				tcgplayer: 85764
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 274459,
				tcgplayer: 85764
			}
		}
	]
}

export default card
