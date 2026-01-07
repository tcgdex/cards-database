import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit 2 (Minun).ts'

const card: Card = {
	dexId: [5],
	set: Set,

	name: {
		en: "Charmeleon",
		fr: "Reptincel"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	stage: "Stage1",

	hp: 70,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Charmander",
		fr: "Salamèche"
	},

	attacks: [{
		cost: [
			"Fire",
			"Colorless"
		],
		name: {
			en: "Flare",
			fr: "Intimidation"
		},
		damage: 30
	}, {
		cost: [
			"Fire",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Damage Burn",
			fr: "Brûlure"
		},
		effect: {
			en: "If the Defending Pokémon already has any damage counters on it, this attack does 40 damage plus 20 more damage.",
			fr: "Si le Pokémon Défenseur possède déjà des marqueurs de dégât, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires."
		},
		damage: "40+"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "2x"
		},
	],

	retreat: 1,
}

export default card
