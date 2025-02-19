import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Arbok"
	},

	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Ekans"
	},


	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Corner"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
