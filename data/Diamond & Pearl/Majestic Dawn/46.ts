import { Card } from '../../../interfaces'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		en: "Scyther",
		fr: "Insécateur",
		de: "Sichlor"
	},

	illustrator: "Ken Sugimori",
	rarity: "Uncommon",
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
				"Colorless",
			],
			name: {
				en: "Slash",
				fr: "Tranche",
				de: "Schlitzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Fury Cutter",
				fr: "Taillade",
				de: "Zornklinge"
			},
			effect: {
				en: "Flip 3 coins. If 1 of them is heads, this attack does 10 damage plus 10 more damage. If 2 of them are heads, this attack does 10 damage plus 20 more damage. If all of them are heads, this attack does 10 damage plus 40 more damage.",
				fr: "Lancez 3 pièces. Si l'une est face, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires. Si deux sont faces, cette attaque inflige 10 dégâts plus 20 dégâts supplémentaires. Si ce ne sont que des faces, cette attaque inflige 10 dégâts plus 40 dégâts supplémentaires.",
				de: "Wirf 3 Münzen. Bei 1 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 10 weitere Schadenspunkte zu. Bei 2 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 20 weitere Schadenspunkte zu. Bei 3 Mal \"Kopf\" fügt dieser Angriff 10 Schadenspunkte plus 40 weitere Schadenspunkte zu."
			},
			damage: "10+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+20"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278095
	}
}

export default card
