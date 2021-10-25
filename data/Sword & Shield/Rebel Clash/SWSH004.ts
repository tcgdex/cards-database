import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Meowth V"
	},

	illustrator: "aky CG Works",
	rarity: "None",
	category: "Pokemon",
	dexId: [52],
	hp: 180,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Pay Day"
		},

		effect: {
			en: "Draw a card."
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slashing Claw"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card