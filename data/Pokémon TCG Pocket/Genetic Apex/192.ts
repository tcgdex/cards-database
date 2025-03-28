import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Fearow"
	},

	illustrator: "Satoshi Shirai",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Spearow"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Drill Run"
		},

		effect: {
			en: "Flip a coin. If heads, discard a random Energy from your opponent's Active Pokémon."
		},

		damage: "50"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Carrying food through Fearow's territory is dangerous. It will snatch the food away from you in a flash!",
	}
}

export default card
