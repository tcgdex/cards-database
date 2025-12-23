import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon2"
	},

	illustrator: "Kent Kanetsuna",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon"
	},

	description: {
		en: "This is a Porygon that was updated with special\ndata. Porygon2 develops itself by learning about\nmany different subjects all on its own."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Speed Attack"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card