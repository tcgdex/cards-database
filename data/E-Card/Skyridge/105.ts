import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sunflora",
		de: "Sonnflora"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		192,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Sunkern",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Energy Plant",
				de: "Energiepflanze"
			},
			effect: {
				en: "Search your deck for a basic Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
				de: "Durchsuche dein Deck nach einer Basis-Energiekarte und lege sie an 1 deiner Pokémon an. Mische dein Deck danach."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Trip Over",
				de: "Beinstellen"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 damage plus 30 more damage.",
				de: "Wirf eine Münze. Bei \"Kopf\" fügt dieser Angriff 30 Schadenspunkte plus 30 weitere Schadenspunkte zu."
			},
			damage: "30+",

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
			type: "Water",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275363
	}
}

export default card
