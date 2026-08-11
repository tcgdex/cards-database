import { Card } from 'models/database/card'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		'en-us': "Donphan",
		'fr-fr': "Donphan",
		'de-de': "Donphan"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		232,
	],

	hp: 100,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Phanpy",
		'fr-fr': "Phanpy",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Rapid Spin",
				'fr-fr': "Tour rapide",
				'de-de': "Turbodreher"
			},
			effect: {
				'en-us': "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. You switch Donphan with 1 of your Benched Pokémon, if any.",
				'fr-fr': "Votre adversaire échange le Pokémon Défenseur avec 1 de ses Pokémon de Banc, s'il en a. Vous échangez Donphan avec 1 des Pokémon de votre Banc, si vous en avez.",
				'de-de': "Dein Gegner tauscht das Verteidigende Pokémon gegen 1 Pokémon auf seiner Bank aus. Du tauschst Donphan gegen 1 Pokémon auf deiner Bank aus."
			},
			damage: 40,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Bash In",
				'fr-fr': "Cabosser",
				'de-de': "Einschlagen"
			},
			effect: {
				'en-us': "If the Defending Pokémon has a Pokémon Tool card attached to it, this attack does 70 damage plus 60 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède une carte Outil Pokémon, cette attaque inflige 70 dégâts plus 60 dégâts supplémentaires.",
				'de-de': "Wenn am Verteidigenden Pokémon mindestens 1 Pokémon-Ausrüstung angelegt ist, fügt dieser Angriff 70 Schadenspunkte plus 60 weitere Schadenspunkte zu."
			},
			damage: "70+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It attacks by curling up, then rolling into its foe. It can blow apart a house in one hit.",
	},

	thirdParty: {
		cardmarket: 277801,
		tcgplayer: 84876
	},

	variants: [
		{
			type: "normal",
		},
		{
			type: "reverse",
		}
	]
}

export default card
