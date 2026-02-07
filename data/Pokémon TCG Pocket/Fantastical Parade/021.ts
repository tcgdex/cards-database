import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Pyroar"
	},

	illustrator: "Hasuno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fire"],

	evolveFrom: {
		en: "Litleo"
	},

	description: {
		en: "The females of a pride work together to bring\ndown prey. It's thanks to them that their pride\ndoesn't starve."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Blast"
		},

		damage: 70,
		cost: ["Fire", "Fire"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card