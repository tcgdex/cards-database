import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwhirl"
	},

	illustrator: "Scav",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Poliwag"
	},

	description: {
		en: "Staring at the swirl on its belly causes drowsiness.\nThis trait of Poliwhirl's has been used in place of\nlullabies to get children to go to sleep."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wave Splash"
		},

		damage: 30,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card