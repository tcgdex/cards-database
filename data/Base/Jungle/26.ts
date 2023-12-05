import { Card } from '../../../interfaces'
import Set from '../Jungle'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
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
				en: "Swords Dance",
				fr: "Danse-lames",
				de: "Schwerttanz"
			},
			effect: {
				en: "During your next turn, Scyther's Slash attack's base damage is 60 instead of 30.",
				fr: "Pendant votre prochain tour, l'attaque Tranche d'Insécateur inflige 60 dégâts de base au lieu de 30.",
				de: "Während deines nächsten Zuges betragen die Basis Schadenspunkte von Sichlors Schlitzer-Angriff 60 anstatt 30."
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
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
		fr: "Rapide et agile comme un ninja, il se déplace si vite qu'il crée l'illusion d'être en groupe."
	}
}

export default card
