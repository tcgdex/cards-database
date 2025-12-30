import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Ariados"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Spinarak"
	},

	description: {
		en: "It spews threads from its mouth to catch its\nprey. When night falls, it leaves its web to go\nhunt aggressively."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Trap Territory"
		},

		effect: {
			en: "Your opponent's Active Pokémon's Retreat Cost is 1 more."
		}
	}],

	attacks: [{
		name: {
			en: "Pierce"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card