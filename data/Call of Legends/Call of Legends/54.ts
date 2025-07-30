import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Clefairy",
		de: "Piepi"
	},

	illustrator: "sui",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		35,
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
			],
			name: {
				en: "Minimize",
				de: "Komprimator"
			},
			effect: {
				en: "During your opponent's next turn, any damage done to Clefairy by attacks is reduced by 20 (after applying Weakness and Resistance).",
				de: "Während des nächsten Zuges deines Gegners wird Schaden, der Piepi durch Angriffe zugefügt wird, um 20 Schadenspunkte reduziert (nachdem Schwäche und Resistenz verrechnet wurden)."
			},

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Slap",
				de: "Hieb"
			},

			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 279697,
		tcgplayer: 84359
	}
}

export default card
