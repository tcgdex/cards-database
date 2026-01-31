import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Mr. Rime"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	evolveFrom: {
		en: "Galarian Mr. Mime"
	},

	description: {
		en: "Its amusing movements make it very popular.\nIt releases its psychic power from the pattern\non its belly."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Triple Spin"
		},

		damage: 60,
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "Flip 3 coins. This attack does 60 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2
}

export default card