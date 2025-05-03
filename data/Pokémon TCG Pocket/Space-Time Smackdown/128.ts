import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon2"
	},

	illustrator: "sowsow",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon"
	},

	description: {
		en: "This is a Porygon that was updated with special data. Porygon2 develops itself by learning about many different subjects all on its own."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Sharpen"
		},

		damage: 30,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
