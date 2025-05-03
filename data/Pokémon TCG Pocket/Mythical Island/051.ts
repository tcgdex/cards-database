import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Purrloin"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 60,
	types: ["Darkness"],

	description: {
		en: "It steals things from people just to amuse itself with their frustration. A rivalry exists between this Pokémon and Nickit."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Scratch"
		},

		damage: 20,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
