import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu V"
	},

	illustrator: "Ryota Murayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [25],
	hp: 190,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Pika Ball"
		},

		damage: 30
	}, {
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Circle Circuit"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched Pokémon."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card