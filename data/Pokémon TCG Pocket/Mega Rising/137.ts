import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Terrakion"
	},

	illustrator: "Takeshi Nakamura",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		en: "It has phenomenal power. It will mercilessly crush\nanyone or anything that bullies small Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sacred Sword"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Sacred Sword."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card