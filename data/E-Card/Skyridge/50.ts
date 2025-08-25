import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Diglett",
		de: "Digda"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		50,
	],

	hp: 40,

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
				en: "Burrow",
				de: "Tunnelbau"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done by attacks to Diglett during your opponent's next turn. (Any other effects of attack still happen.)",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" allen Schaden, der Digda während des nächsten Zugs deines Gegners durch Angriffe zugefügt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-30"
		},
	],

	thirdParty: {
		cardmarket: 275308,
		tcgplayer: 84818
	}
}

export default card
