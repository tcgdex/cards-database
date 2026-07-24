import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Snivy",
		fr: "Vipélierre"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],
	stage: "Basic",
	dexId: [495],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
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
