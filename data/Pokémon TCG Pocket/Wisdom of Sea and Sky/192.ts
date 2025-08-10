import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Venomous Slash"
		},

		damage: 70,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card