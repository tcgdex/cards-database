import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Cherrim"
	},

	illustrator: "Midori Harada",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Cherubi"
	},

	description: {
		en: "As a bud, it barely moves. It sits still, placidly<br />waiting for sunlight to appear."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Worry Seed"
		},

		damage: 40,
		cost: ["Grass"],

		effect: {
			en: "Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card