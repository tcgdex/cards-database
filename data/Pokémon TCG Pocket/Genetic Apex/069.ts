import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Kingler"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "KO Crab"
		},

		effect: {
			en: "Flip 2 coins. If both of them are heads, this attack does 80 more damage"
		},

		damage: "80+"
	}],

	retreat: 3,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Krabby",
		fr: "Krabby",
		es: "Krabby",
		it: "Krabby",
		pt: "Krabby",
		de: "Krabby"
	}
}

export default card
