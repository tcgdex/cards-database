import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Swinub",
		de: "Quiekel"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		220,
	],

	hp: 50,

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
				en: "Mud Slap",
				de: "Schlammschlag"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Overrun",
				de: "Überrennen"
			},
			effect: {
				en: "If your opponent has nay Benched Pokémon, flip a coin. If heads, choose 1 of them and this attack does 10 damage to it. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				de: "Falls dein Gegner mindestens ein Pokémon auf der Bank aht, wirf eine Münze. Wähle bei 'Kopf' eines von diesen. Dieser Angriff fügt ihm dann 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
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
		cardmarket: 275365
	}
}

export default card
