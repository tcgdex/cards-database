import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Shiftry"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [275],
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Nuzleaf"
	},

	description: {
		en: "It lives quietly in the deep forest. It is said to\ncreate chilly winter winds with the fans it holds."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Nipping Cyclone"
		},

		damage: 70,
		cost: ["Grass", "Grass"],

		effect: {
			en: "Discard a random card from your opponent's hand."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-blaziken"]
}

export default card