import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Frosmoth"
	},

	illustrator: "aoki",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Snom"
	},


	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Powder Snow"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "Frosmoth senses air currents with its antennae. It sends its scales drifting on frigid air, making them fall like snow.",
	}
}

export default card
