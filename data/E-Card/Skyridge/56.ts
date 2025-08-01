import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Forretress",
		de: "Forstellka"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		205,
	],

	hp: 70,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Pineco",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				en: "Exoskeleton",
				de: "Exoskelett"
			},
			effect: {
				en: "All damage done by attacks to Forretress is reduced by 10 (after applying Weakness and Resistance).",
				de: "Jeder Schaden der Frostellka durch Angriff zugefügt wird, wird um 10 reduziert (nachdem Schwäche udn resistenz verrechnet wurden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Shell Rupture",
				de: "Schalenbruch"
			},
			effect: {
				en: "This attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Dieser Angriff fügt jedem Pokémon auf der gegnerischen Bank 10 Schadenspunkte zu. (Wende keine Schwäche oder Resistenz bei Pokémon auf der Bank an.)"
			}

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double Spin",
				de: "Doppeldreher"
			},
			effect: {
				en: "Flip 2 coins. This attack does 40 damage times the number of heads.",
				de: "Wirf 2 Münzen. Dieser Angriff fügt 40 Schadenspunkte mal der Anzahl \"Kopf\" zu."
			},
			damage: "40x",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275251,
		tcgplayer: 85546
	}
}

export default card
