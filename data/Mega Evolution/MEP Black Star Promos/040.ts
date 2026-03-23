import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Turtwig",
		fr: "Tortipouss"
	},

	illustrator: "Saboteri",
	rarity: "Black Star Promo",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Basic",
	dexId: [387],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: 60
	}],

	retreat: 2,
	regulationMark: "J"
}

export default card
