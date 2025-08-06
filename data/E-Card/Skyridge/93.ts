import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Sandslash",
		de: "Sandamer"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		28,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	evolveFrom: {
		en: "Sandshrew",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Sand Trap",
				de: "Sandfalle"
			},
			effect: {
				en: "If your opponent has any Benched Pokémon, choose up to 2 of them. This attack does 10 damage to each of them. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wenn auf der Bank deines Gegners Pokémon vorhanden sind, wähle bis zu 2 von ihnen. Dieser Angriff fügt jedem dieser Pokémon 10 Schadenspunkte zu. (Wende keine Schwäche und Resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 10,

		},
		{
			cost: [
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Poison Needle Rush",
				de: "Giftnadelrakete"
			},
			effect: {
				en: "Flip 3 coins. This attack does 20 damage times the number of heads. If you get at least 1 heads, the Defending Pokémon is now Poisoned.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Wenn du dabei mindestens 1 \"Kopf\" erzielst, ist das verteidigende Pokémon jetzt vergiftet."
			},
			damage: "20x",

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
		cardmarket: 275351,
		tcgplayer: 88931
	}
}

export default card
