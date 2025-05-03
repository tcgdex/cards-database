import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Kakuna"
	},

	illustrator: "Yuka Morii",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		en: "Weedle"
	},

	description: {
		en: "Almost incapable of moving, this Pokémon can only harden its shell to protect itself when it is in danger."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "String Shot"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card