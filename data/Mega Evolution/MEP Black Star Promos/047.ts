import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Cyndaquil",
		fr: "Héricendre"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",
	dexId: [155],

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card
