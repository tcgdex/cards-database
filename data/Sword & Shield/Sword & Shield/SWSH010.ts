import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Gossifleur"
	},

	illustrator: "Naoki Saito",
	rarity: "None",
	category: "Pokemon",
	dexId: [829],
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It anchors itself in the ground with its single leg, then basks in the sun. After absorbing enough sunlight, its petals spread as it blooms brilliantly."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Sing"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card