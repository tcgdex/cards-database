import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Seaking"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Horn Hazard"
		},

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		},

		damage: "80"
	}],

	retreat: 1,
	rarity: "One Diamond",

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
		es: "Goldeen",
		it: "Goldeen",
		pt: "Goldeen",
		de: "Goldini"
	}
}

export default card
