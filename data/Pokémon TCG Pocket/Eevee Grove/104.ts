import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Articuno ex"
	},

	illustrator: "PLANETA Saito",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Ice Wing"
		},

		damage: 40,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			en: "Blizzard"
		},

		damage: 80,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "This attack also does 10 damage to each of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card