import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Dugtrio"
	},

	illustrator: "Yuka Morii",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Metal"],

	evolveFrom: {
		en: "Alolan Diglett"
	},

	description: {
		en: "Their beautiful, metallic whiskers create a sort of protective helmet on their heads, and they also function as highly precise sensors."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Iron Head"
		},

		damage: 70,
		cost: ["Metal", "Metal"],

		effect: {
			en: "Flip a coin until you get tails. This attack does 70 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card