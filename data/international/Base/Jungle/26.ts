import { Card } from 'models/database/card'
import Set from '../Jungle'

const card: Card = {
	name: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
		'de-de': "Sichlor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		123,
	],

	hp: 70,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				'en-us': "Swords Dance",
				'fr-fr': "Danse-lames",
				'de-de': "Schwerttanz"
			},
			effect: {
				'en-us': "During your next turn, Scyther's Slash attack's base damage is 60 instead of 30.",
				'fr-fr': "Pendant votre prochain tour, l'attaque Tranche d'Insécateur inflige 60 dégâts de base au lieu de 30.",
				'de-de': "Während deines nächsten Zuges betragen die Basis Schadenspunkte von Sichlors Schlitzer-Angriff 60 anstatt 30."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Slash",
				'fr-fr': "Tranche",
				'de-de': "Schlitzer"
			},

			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
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
		'en-us': "With ninja-like agility and speed, it can create the illusion that there is more than one of it.",
		'fr-fr': "Rapide et agile comme un ninja, il se déplace si vite qu'il crée l'illusion d'être en groupe."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 273807,
				tcgplayer: 106988
			}
		},
		{
			type: "normal",
			stamp: ["1st-edition"],
			thirdParty: {
				cardmarket: 273807,
				tcgplayer: 106988
			}
		}
	],
}

export default card
