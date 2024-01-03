import { Card } from '../../../interfaces'
import Set from '../FireRed & LeafGreen'

const card: Card = {
	name: {
		en: "Charmeleon",
		fr: "Reptincel",
		de: "Glutexo"
	},
	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		5,
	],
	hp: 70,
	types: [
		"Fire",
	],
	evolveFrom: {
		en: "Charmander",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flare",
				fr: "Intimidation",
				de: "Flare"
			},

			damage: 30,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Damage Burn",
				fr: "Brûlure",
				de: "Damage Burn"
			},
			effect: {
				en: "If the Defending Pokémon has already any damage counters on it, this attack does 40 damage plus 20 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
				de: "If the Defending pokemon already has any damage counters on it, this attack does 40 damage plus 20 more damage."
			},
			damage: "40+",

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
