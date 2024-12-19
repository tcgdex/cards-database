import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Rapidash"
	},

	illustrator: "Taira Akitsu",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			en: "Fire Mane"
		},

		damage: "40"
	}],

	retreat: 1,
	rarity: "One Star",

	evolveFrom: {
		en: "Ponyta",
		fr: "Ponyta",
		es: "Ponyta",
		it: "Ponyta",
		pt: "Ponyta",
		de: "Ponita"
	}
}

export default card
