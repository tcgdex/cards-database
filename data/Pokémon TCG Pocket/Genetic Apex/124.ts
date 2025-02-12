import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Drowzee"
	},

	illustrator: "Yukiko Baba",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Mumble"
		},

		damage: "30"
	}],

	retreat: 2,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
