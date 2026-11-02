import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Keldeo",
		fr: "Keldeo"
	},

	illustrator: "Narumi Sato",
	rarity: "One Star",
	category: "Pokemon",

	dexId: [647],
	hp: 100,
	types: ["Water"],

	description: {
		en: "It crosses the world, running over the surfaces of\noceans and rivers. It appears at scenic waterfronts."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Sword",
			fr: "Lame Sainte"
		},

		damage: 110,
		cost: ["Water", "Water", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Sacred Sword.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Lame Sainte."
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