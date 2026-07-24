import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Torchic",
		fr: "Poussifeu"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	dexId: [255],

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck",
			fr: "Picpic"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
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
