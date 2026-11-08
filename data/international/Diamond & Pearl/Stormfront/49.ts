import { Card } from 'models/database/card'
import Set from '../Stormfront'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 60,

	types: [
		"Grass",
	],

	evolveFrom: {
		'fr-fr': "Insécateur",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse-lames",
				'de-de': "Schwerttanz"
			},
			effect: {
				'en-us': "During your next turn, Scyther's Slashing Strike attack's base damage is 60.",
				'fr-fr': "Lors de votre prochain tour, les dégâts de base de l'attaque Coup déchirant d'Insécateur sont de 60.",
				'de-de': "In deinem nächsten Zug beträgt der Grundschaden von Sichlors Angriff Schlitzender Schlag 60 Schadenspunkte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Slashing Strike",
				'fr-fr': "Coup déchirant",
				'de-de': "Schlitzender Schlag"
			},
			effect: {
				'en-us': "During your next turn, Scyther can't use Slashing Strike.",
				'fr-fr': "Lors de votre prochain tour, Insécateur ne peut pas utiliser Coup déchirant.",
				'de-de': "Sichlor kann Schlitzender Schlag in deinem nächsten Zug nicht einsetzen."
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
			type: "Fighting",
			value: "-20"
		},
	],

	description: {
		'en-us': "It is nearly impossible to parry its attacking scythes. Its movements are like a ninja's.",
		'fr-fr': "Ses coups de faux sont pratiquement imparables. Il se déplace comme un ninja."
	},

	thirdParty: {
		cardmarket: 278347,
		tcgplayer: 89001
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
