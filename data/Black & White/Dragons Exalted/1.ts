import { Card } from '../../../interfaces'
import Set from '../Dragons Exalted'

const card: Card = {
	name: {
		en: "Hoppip",
		fr: "Granivol",
		es: "Hoppip",
		it: "Hoppip",
		pt: "Hoppip",
		de: "Hoppspross"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		187,
	],

	hp: 30,

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
				en: "Flail Around",
				fr: "Fléau Bougeant",
				de: "Rumrudern"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 10,

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
			value: "-20"
		},
	],

	retreat: 1,

	description: {
		en: "It drifts on winds. It is said that when Hoppip gather in fields and mountains, spring is on the way.",
		de: "Es reitet auf dem Wind. Man sagt, wenn sich Hoppspross versammeln, kommt der Frühling bald."
	},

	thirdParty: {
		cardmarket: 280440,
		tcgplayer: 86183
	}
}

export default card
