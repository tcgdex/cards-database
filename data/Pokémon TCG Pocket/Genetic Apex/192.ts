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

	retreat: 1,
	rarity: "One Diamond"
}

export default card
