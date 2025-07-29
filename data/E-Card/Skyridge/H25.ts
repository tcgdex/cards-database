import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Raichu",
		de: "Raichu"
	},

	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		26,
	],

	hp: 80,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Pikachu",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Zzzap",
				de: "Zzzapp!"
			},
			effect: {
				en: "This attack does 20 damage to each Pokémon with a Poké",
				de: "Dieser Angriff fügt jedem Pokémon mit einem Poké-Body oder einer Poké-Power 20 Schadenspunkte zu (deinen und den gegnerischen Pokémon). (Wende keine Schwäche oder Resistenz an.)"
			},

		},
		{
			cost: [
				"Lightning",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Lightning Storm",
				de: "Blitzsturm"
			},
			effect: {
				en: "Flip a coin. If tails, put 2 damage counters on Raichu.",
				de: "Wirf eine Münze. Lege bei 'Zahl' 2 Schadensmarken auf Raichu."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275243
	}
}

export default card
