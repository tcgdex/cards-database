import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Golurk"
	},

	illustrator: "match",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless", "Colorless"],

		name: {
			en: "Double Lariat"
		},

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads."
		},

		damage: "100x"
	}],

	retreat: 4,
	rarity: "Two Diamond",

	evolveFrom: {
		en: "Golett",
		fr: "Gringolem",
		es: "Golett",
		it: "Golett",
		pt: "Golett",
		de: "Golbit"
	}
}

export default card
