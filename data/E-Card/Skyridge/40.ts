import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Noctowl",
		de: "Noctuh"
	},
	illustrator: "Atsuko Nishida",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		164,
	],
	hp: 70,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Hoothoot",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Poke-POWER",
			name: {
				en: "Investigate",
				de: "Ermitteln"
			},
			effect: {
				en: "Once during your turn (before you attack) you may look at the top 2 cards of any player's deck or at to up 2 of any player's Prizes. Put any cards you looked at back in the same order. This power can't be used if Noctowl is affected by a Special Condition.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du dir die obersten 2 Karten des Decks eines der Spieler oder bis zu 2 der Preise eines der Spieler anschauen. Lege alle Karten, die du dir angeschaut hast, in der gleichen Reihenfolge zurück. Diese Fähigkeit kann nicht verwendet werden, falls Noctuh von einem speziellen Zustand betroffen ist."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Triple Smash",
				de: "Dreifachschmetterer"
			},
			effect: {
				en: "Flip 3 coins. This attack does 10 damage plus 10 more damage for each heads.",
				de: "Wirf 3 Münzen. Dieser Angriff fügt 10 Schadenspunkte plus 10 weitere Schadenspunkte pro geworfenem \"Kopf\" zu."
			},
			damage: "10+",

		},
	],
	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],




}

export default card
