import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [906],

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Leafage",
			fr: "Feuillage"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card
