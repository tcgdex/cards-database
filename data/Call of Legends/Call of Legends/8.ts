import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Hitmontop",
		de: "Kapoera"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Rare Holo",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 60,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Triple Kick",
				de: "Dreifachkick"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "20x",

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Close Combat",
				de: "Nahkampf"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Hitmontop by attacks is increased by 20 (after applying Weakness and Resistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Kapoera durch Angriffe zugefügt wird, um 20 Schadenspunkte erhöht (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279651,
		tcgplayer: 86117
	}
}

export default card
