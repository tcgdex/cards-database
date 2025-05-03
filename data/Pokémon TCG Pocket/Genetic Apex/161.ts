import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Mienshao"
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Mienfoo"
	},


	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Spiral Kick"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Diamond",

	description: {
		en: "When Mienshao comes across a truly challenging opponent, it will lighten itself by biting off the fur on its arms.",
	}
}

export default card
