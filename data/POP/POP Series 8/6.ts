import { Card } from '../../../interfaces'
import Set from '../POP Series 8'

const card: Card = {
	name: {
		en: "Cherrim",
		de: "Kinoso"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		421,
	],

	hp: 80,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Cherubi",
		de: "Kikugi"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Worry Seed",
				de: "Sorgensamen"
			},
			effect: {
				en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
				de: "Wirf 1 Münze. Bei „Kopf“ ist das Verteidigende Pokémon jetzt verwirrt."
			},
			damage: 20,

		},
		{
			cost: [
				"Grass",
				"Grass",
			],
			name: {
				en: "Magical Leaf",
				de: "Zauberblatt"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage and remove 3 damage counters from Cherrim.",
				de: "Wirf 1 Münze. Bei „Kopf“ fügt dieser Angriff 20 Schadenspunkte plus 20 weitere Schadenspunkte zu und entferne 3 Schadensmarken von Kinoso."
			},
			damage: "20+",

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
			type: "Water",
			value: "-20"
		},
	],

	description: {
		en: "It blooms during times of strong sunlight. It tries to make up for everything it endured as a bud.",
		de: "In Zeiten mit viel Sonnenschein blüht es auf. Es holt nach, was ihm als Knospe verwehrt blieb."
	},

	retreat: 2,


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 278407,
				tcgplayer: 84253
			}
		},
		{
			type: "reverse",
			foil: "cracked-ice",
			thirdParty: {
				cardmarket: 278407,
				tcgplayer: 84253
			}
		},
	],
}

export default card
