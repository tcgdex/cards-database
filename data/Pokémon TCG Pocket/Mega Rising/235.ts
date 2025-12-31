import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Keldeo"
	},

	illustrator: "Narumi Sato",
	rarity: "One Star",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		en: "It crosses the world, running over the surfaces of\noceans and rivers. It appears at scenic waterfronts."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Sword"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card