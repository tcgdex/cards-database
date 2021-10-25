import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Blastoise V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	dexId: [9],
	hp: 220,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Water Gun"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			en: "Torrential Cannon"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Torrential Cannon."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card