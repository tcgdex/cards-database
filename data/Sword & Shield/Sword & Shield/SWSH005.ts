import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Meowth VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [52],
	hp: 300,
	types: ["Colorless"],

	evolveFrom: {
		en: "Meowth V"
	},

	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "G-Max Gold Rush"
		},

		effect: {
			en: "Draw 3 cards."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card