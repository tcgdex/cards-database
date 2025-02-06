import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Skuntank"
	},

	illustrator: "kirisAki",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Stunky"
	},

	description: {
		en: "It attacks by spraying a horribly smelly fluid from the tip of its tail. Attacks from above confound it."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Poison Gas"
		},

		damage: 50,
		cost: ["Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
