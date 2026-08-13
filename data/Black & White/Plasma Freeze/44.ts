import { Card } from '../../../interfaces'
import Set from '../Plasma Freeze'

const card: Card = {
	name: {
		en: "Nidorino",
		fr: "Nidorino",
		es: "Nidorino",
		it: "Nidorino",
		pt: "Nidorino",
		de: "Nidorino"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		33,
	],

	hp: 90,

	types: [
		"Psychic",
	],

	evolveFrom: {
		en: "Nidoran♂",
		fr: "Nidoran♂",
		de: "Nidoran♂"
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
			],
			name: {
				en: "Double Kick",
				fr: "Double Pied",
				de: "Doppelkick"
			},
			effect: {
				en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
				fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 30 Schadenspunkte mal der Anzahl „Kopf“ zu."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Horn Attack",
				fr: "Koud'Korne",
				de: "Hornattacke"
			},

			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		en: "It has a violent disposition and stabs foes with its horn, which oozes poison upon impact.",
		de: "Es ist aggressiv und greift seine Gegner mit dem Horn an, welches bei Berührung Gift absondert."
	},

	thirdParty: {
		cardmarket: 280922,
		tcgplayer: 87748
	}
}

export default card
