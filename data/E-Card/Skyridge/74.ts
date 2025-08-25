import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Machop",
		de: "Machollo"
	},

	illustrator: "Miki Tanaka",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		66,
	],

	hp: 50,

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
				en: "Smash Punch",
				de: "Schmetterschlag"
			},

			effect: {
				en: "Flip a coin. If tails, this attack does nothing.",
				de: "Wirf eine Münze. Bei \"Zahl\" hat dieser Angriff keine Auswirkung."
			},

			damage: 20
		},
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				en: "Fling",
				de: "Austoben"
			},
			effect: {
				en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any. (Do the damage before switching the Pokémon.)",
				de: "Dein Gegner tauscht das verteidigende Pokémon mit 1 der Pokémon auf seiner Bank aus. (Füge die Schadenspunkte vor dem Austauschen der Pokémon zu.)"
			},
			damage: 20,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275332,
		tcgplayer: 86989
	}
}

export default card
