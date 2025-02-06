import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Slowbro"
	},

	illustrator: "Kogemaru Himeno",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Stage1",
	evolveFrom: {
		en: "Slowpoke"
	},


	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Super Psy Bolt"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	description: {
		en: "When a Slowpoke went hunting in the sea, its tail was bitten by a Shellder. That made it evolve into Slowbro.",
	}
}

export default card
