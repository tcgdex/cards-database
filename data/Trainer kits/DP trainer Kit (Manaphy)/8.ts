import { Card } from '../../../interfaces'
import Set from '../DP trainer Kit (Manaphy)'

const card: Card = {
	dexId: [158],
	set: Set,

	name: {
		en: "Totodile",
		fr: "Kaiminus"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Basic",

	hp: 50,

	types: [
		"Water",
	],

	attacks: [
		{
			cost: [
				"Colorless"
			],
			name: {
				en: "Bite",
				fr: "Morsure"
			},
			damage: 10
		},
		{
			cost: [
				"Water",
			],
			name: {
				en: "Shining Fang",
				fr: "Croc luisant"
			},
			effect: {
				en: "If the Defending Pokémon already has any damage counters on it, this attack does 10 damage plus 10 more damage.",
				fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 10 dégâts plus 10 dégâts supplémentaires."
			},
			damage: "10+"
		}
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "10+"
		}
	],

	description: {
		en: "It has the habit of biting anything with its developed jaws. Even its Trainer needs to be careful."
	},

	retreat: 1
}

export default card
