import { Card } from '../../../interfaces'
import Set from '../Plasma Storm'

const card: Card = {
	name: {
		en: "Skitty",
		fr: "Skitty",
		es: "Skitty",
		it: "Skitty",
		pt: "Skitty",
		de: "Eneco"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		300,
	],

	hp: 50,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Slap",
				fr: "Triple Gifle",
				de: "Triplexhieb"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		en: "It shows its cute side by chasing its own tail until it gets dizzy.",
		de: "Es zeigt gerne seine niedliche Seite, indem es seinen eigenen Schweif jagt, bis ihm schwindlig wird."
	},

	thirdParty: {
		cardmarket: 280849,
		tcgplayer: 89270
	}
}

export default card
