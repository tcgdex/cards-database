import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Eelektross"
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 140,
	types: ["Lightning"],
	stage: "Stage2",
	evolveFrom: {
		en: "Eelektrik"
	},


	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Thunder Fang"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "They crawl out of the ocean using their arms. They will attack prey on shore and immediately drag it into the ocean.",
	}
}

export default card
