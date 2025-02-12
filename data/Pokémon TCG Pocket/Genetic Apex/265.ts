import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Wigglytuff ex"
	},

	illustrator: "PLANETA Igarashi",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Jigglypuff"
	},
	suffix: "EX",
	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Sleepy Song"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		},

		damage: "80"
	}],
	retreat: 2,
	rarity: "Two Star",
	boosters: [Pikachu]
}

export default card
