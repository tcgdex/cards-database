import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sandshrew",
		de: "Sandan"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		27,
	],

	hp: 40,

	types: [
		"Fighting",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Double Scratch",
				de: "Doppelkratzer"
			},
			effect: {
				en: "Flip 2 coins. This attack does 10 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 10 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "10x",

		},
		{
			cost: [
				"Fighting",
			],
			name: {
				en: "Dig Under",
				de: "Vergraben"
			},
			effect: {
				en: "Choose 1 of your opponent's Pokémon. This attack does 10 damage to that Pokémon. Don't apply Weakness and Resistance. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
				de: "Wähle 1 Pokémon deines Gegners. Dieser Angriff fügt diesem Pokémon 10 Schadenspunkte zu. Wende keine Schwäche oder Resistenz an (Alle anderen Auswrikungen von Angriffen, die nach der Anwendung von Schwäche und Resistenz stattfänden, finden immer noch statt.)"
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

	thirdParty: {
		cardmarket: 275350,
		tcgplayer: 88921
	}
}

export default card
