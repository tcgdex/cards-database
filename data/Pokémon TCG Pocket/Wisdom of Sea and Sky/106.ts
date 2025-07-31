import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Barbaracle"
	},

	illustrator: "Nurikabe",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	evolveFrom: {
		en: "Binacle"
	},

	description: {
		en: "Seven Binacle come together to form one\nBarbaracle. The Binacle that serves as the head\ngives orders to those serving as the limbs."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dynamic Chop"
		},

		damage: 70,
		cost: ["Fighting", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card