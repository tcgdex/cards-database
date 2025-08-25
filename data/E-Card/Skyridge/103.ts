import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Staryu",
		de: "Sterndu"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		120,
	],

	hp: 40,

	types: [
		"Water",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Energy Healing",
				de: "Energieauffrischung"
			},
			effect: {
				en: "Remove 2 damage counters from Staryu for each energy attached to it. If it has fewer damage counters than that, remove all of them.",
				de: "Entferne für jede an Sterndu angelegte Energie 2 Schadensmarken von ihm. Wenn es weniger Schadensmarken hat, entferne alle."
			},

		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Doubleslap",
				de: "Duplexhieb"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275361,
		tcgplayer: 89544
	}
}

export default card
