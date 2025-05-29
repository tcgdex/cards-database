import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Buzzwole ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Punch"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Big Beat"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't use Big Beat."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card