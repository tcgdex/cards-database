import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Masquerain"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Surskit"
	},

	description: {
		en: "It flaps its four wings to hover and fly freely in any direction—to and fro and sideways."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bug Buzz"
		},

		damage: 40,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 0
}

export default card