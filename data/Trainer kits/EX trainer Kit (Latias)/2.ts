import { Card } from '../../../interfaces'
import Set from '../EX trainer Kit (Latias)'

const card: Card = {
	dexId: [256],
	set: Set,

	name: {
		en: "Combusken"
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
		en: "Torchic",
	},

	attacks: [{
		cost: [
			"Fire",
		],
		name: {
			en: "Flare"
		},
		damage: 20
	}, {
		cost: [
			"Colorless",
			"Colorless",
			"Colorless"
		],
		name: {
			en: "Double Kick"
		},
		effect: {
			en: "Flip 2 coins. This attack does 40 damage times the number of heads."
		},
		damage: "40×"
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
