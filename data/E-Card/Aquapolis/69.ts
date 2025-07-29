import { Card } from '../../../interfaces'
import Set from '../Aquapolis'

const card: Card = {
	name: {
		en: "Chansey",
		fr: "Leveinard",
		de: "Chaneira"
	},

	illustrator: "Atsuko Nishida",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		113,
	],

	hp: 100,

	types: [
		"Colorless",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Rollout",
				fr: "Roulade",
				de: "Walzer"
			},

			damage: 10,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				fr: "Damoclès",
				de: "Risikotackle"
			},
			effect: {
				en: "Chansey does 40 damage to itself.",
				fr: "Leveinard s'inflige 40 dégâts.",
				de: "Chaneira fügt sich selber 40 Schadenspunkte zu."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275142
	}
}

export default card
