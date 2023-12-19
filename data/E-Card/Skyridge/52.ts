import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Dugtrio",
		de: "Digdri"
	},
	illustrator: "Tomokazu Komiya",
	rarity: "Common",
	category: "Pokemon",

	set: Set,
	dexId: [
		51,
	],
	hp: 70,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Diglett",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Burrow",
				de: "Tunnelbau"
			},
			effect: {
				en: "Flip a coin. If heads, prevent all damage done by attacks to Dugtrio during your opponent's next turn. (any other effects of attacks still happen.)",
				de: "Wirf eine Münze. Verhindere bei \"Kopf\" allen Schaden, der Digdri während des nächsten Zuges deines Gegners durch Angriffe zugefügt wird. (Alle anderen Auswirkungen von Angriffen finden immer noch statt.)"
			},
			damage: 20,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Dig Under",
				de: "Vergraben"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 30 damage to that Pokémon. Don't apply Weakness or Resistance. (any other effects that would happen after applying Weakness and Resistance still happen.)",
				de: "Wähle 1 der Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 30 Schadenspunkte zu. Wende keine Schwäche oder Resistenz an. (Alle anderen Auswirkungen von Angriffen, die nach der Anwendung von Schwäche und Resistenz stattfinden, finden immer noch statt.)"
			}
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




}

export default card
