import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Yanmega"
	},

	illustrator: "Uta",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Yanma"
	},

	description: {
		en: "It prefers to battle by biting apart foes' heads\ninstantly while flying by at high speed."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Bug Buzz"
		},

		damage: 60,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card