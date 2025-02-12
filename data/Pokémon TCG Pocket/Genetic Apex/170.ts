import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Nidorino"
	},

	illustrator: "Kouki Saitou",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Nidoran♂"
	},

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
