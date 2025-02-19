import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Poliwhirl"
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	stage: "Stage1",
	evolveFrom: {
		en: "Poliwag"
	},


	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Knuckle Punch"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "Staring at the swirl on its belly causes drowsiness. This trait of Poliwhirl's has been used in place of lullabies to get children to go to sleep.",
	}
}

export default card
