import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Forretress",
		de: "Forstellka"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		205,
	],
	hp: 70,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Pineco",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Spinning Blow",
				de: "Rundumschlag"
			},
			effect: {
				en: "Flip 2 coins. This attack does 20 damage times the number of heads. If both coins are heads, switch Forretress with 1 of your Benched Pokémon.",
				de: "Wirf zwei Münzen. Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl \"Kopf\" zu. Zeigen beide Münzen \"Kopf\", tausche Forstellka mit 1 der Pokémon auf deiner Bank aus."
			},
			damage: 20,

		},
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Scatterbomb",
				de: "Streubombe"
			},
			effect: {
				en: "Flip 2 coins. For each heads, do 10 damage to each of your opponent's Benched Pokémon. For each tails, do 10 damage to each of your own Benched Pokémon. (Don't apply Weakness or Resistance for Benched Pokémon.)",
				de: "Wirf 2 Münzen. Füge für jeden geworfenen \"Kopf\" jedem Pokémon auf der generischen Bank 10 Schadenspunkte zu. Füge für jede geworfene \"Zahl\" jedem Pokémon auf deiner eigenen Bank 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			},
			damage: 40,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],




}

export default card
