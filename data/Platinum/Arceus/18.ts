import { Card } from '../../../interfaces'
import Set from '../Arceus'

const card: Card = {
	name: {
		en: "Glalie",
		de: "Firnontor"
	},

	illustrator: "Hiroki Fuchino",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		362,
	],
	
	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Snorunt",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Wreck",
				de: "Abreißen"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 20 damage plus 50 more damage. Discard that Stadium card.",
				de: "Wenn sich eine Stadion-Karte im Spiel befindet, fügt dieser Angriff 20 Schadenspunkte plus 50 weitere Schadenspunkte zu. Lege danach die Stadion-Karte auf den Ablagestapel."
			},
			damage: "20+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				en: "Avalanche",
				de: "Lawine"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Wirf 1 Münze. Bei \"Kopf\" fügt dieser Angriff jedem Pokémon auf der Bank deines Gegners 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "+20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 278890,
		tcgplayer: 85756
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse",
		}
	]
}

export default card
