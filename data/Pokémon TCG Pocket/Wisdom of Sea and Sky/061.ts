import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Crawdaunt"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	evolveFrom: {
		en: "Corphish"
	},

	description: {
		en: "A rough customer that wildly flails its giant claws.\nIt is said to be extremely hard to raise."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Unruly Claw"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may discard a random Energy from your opponent's Active Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Crabhammer"
		},

		damage: 70,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card