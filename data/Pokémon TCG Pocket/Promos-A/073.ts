import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Toucannon"
	},

	illustrator: "Sekio",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Trumbeak"
	},

	description: {
		en: "They smack beaks with others of their kind to communicate. The strength and number of hits tell each other how they feel."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Beak Blast"
		},

		damage: 80,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2
}

export default card