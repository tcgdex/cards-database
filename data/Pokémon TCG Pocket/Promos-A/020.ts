import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Haunter"
	},

	illustrator: "Mékayu",
	rarity: "One Diamond",
	category: "Pokemon",
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		name: {
			en: "Surprise Attack"
		},

		cost: ["Psychic"],
		damage: 50,

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	evolveFrom: {
		en: "Gastly",
		fr: "Fantominus",
		es: "Gastly",
		it: "Gastly",
		pt: "Gastly",
		de: "Nebulak"
	}
}

export default card