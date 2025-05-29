import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Poipole"
	},

	illustrator: "Shin Nagasawa",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "This Ultra Beast is well enough liked to be\nchosen as a first partner in its own world."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "2-Step"
		},

		damage: 20,
		cost: ["Darkness"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card