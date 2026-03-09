import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Reshiram"
	},

	illustrator: "toriyufu",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		en: "When Reshiram's tail flares, the heat energy moves\nthe atmosphere and changes the world's weather."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blue Flare"
		},

		damage: 110,
		cost: ["Fire", "Fire", "Fire"],

		effect: {
			en: "Discard 2 {R} Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card