import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sobble",
		fr: "Larméléon"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",
	dexId: [816],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Water Gun",
			fr: "Pistolet à O"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
