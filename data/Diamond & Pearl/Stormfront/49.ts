import { Card } from '../../../interfaces'
import Set from '../Stormfront'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
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
		fr: "Insécateur",
	},

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Swords Dance",
				fr: "Danse-lames",
				de: "Schwerttanz"
			},
			effect: {
				en: "During your next turn, Scyther's Slashing Strike attack's base damage is 60.",
				fr: "Lors de votre prochain tour, les dégâts de base de l'attaque Coup déchirant d'Insécateur sont de 60.",
				de: "In deinem nächsten Zug beträgt der Grundschaden von Sichlors Angriff Schlitzender Schlag 60 Schadenspunkte."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Slashing Strike",
				fr: "Coup déchirant",
				de: "Schlitzender Schlag"
			},
			effect: {
				en: "During your next turn, Scyther can't use Slashing Strike.",
				fr: "Lors de votre prochain tour, Insécateur ne peut pas utiliser Coup déchirant.",
				de: "Sichlor kann Schlitzender Schlag in deinem nächsten Zug nicht einsetzen."
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
		fr: "Ses coups de faux sont pratiquement imparables. Il se déplace comme un ninja."
	}
}

export default card
