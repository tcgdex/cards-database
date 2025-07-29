import { Card } from '../../../interfaces'
import Set from '../Skyridge'

const card: Card = {
	name: {
		en: "Pineco",
		de: "Tannza"
	},

	illustrator: "Midori Harada",
	rarity: "Common",
	category: "Pokemon",
	set: Set,

	dexId: [
		204,
	],

	hp: 50,

	types: [
		"Grass",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				en: "Double-edge",
				de: "Risikotackle"
			},
			effect: {
				en: "Pineco does 10 damage to itself.",
				de: "Tannza fügt sich selber 10 Schadenspunkte zu."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	thirdParty: {
		cardmarket: 275343
	}
}

export default card
