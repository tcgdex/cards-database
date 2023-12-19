import { Card } from '../../../interfaces'
import Set from '../Call of Legends'

const card: Card = {
	name: {
		en: "Magmortar",
		de: "Magbrant"
	},
	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		467,
	],
	hp: 110,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Magmar",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Hard Crush",
				de: "Heftiger Zermalmer"
			},
			effect: {
				en: "Discard the top 3 cards from your deck. This attack does 50 damage times the number of Energy cards you discarded.",
				de: "Lege die obersten 3 Karten deines Decks auf deinen Ablagestapel. Dieser Angriff fügt 50 Schadenspunkte mal der Anzahl abgelegter Energiekarten zu."
			},
			damage: "50x",

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Mantle Bazooka",
				de: "Verhüllte Panzerfaust"
			},
			effect: {
				en: "Discard 2 Fire Energy attached to Magmortar.",
				de: "Lege 2 an Magbrant angelgte -Energien auf deinen Ablagestapel."
			},
			damage: 100,

		},
	],
	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],





}

export default card
