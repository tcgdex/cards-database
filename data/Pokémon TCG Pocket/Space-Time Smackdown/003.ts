import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Bellossom"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	evolveFrom: {
		en: "Gloom"
	},

	description: {
		en: "Plentiful in the tropics. When it dances, its petals rub together and make a pleasant ringing sound."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Leaf Step"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
