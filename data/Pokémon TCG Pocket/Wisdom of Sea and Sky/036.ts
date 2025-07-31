import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Darmanitan"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Darumaka"
	},

	description: {
		en: "The thick arms of this hot-blooded Pokémon\ncan deliver punches capable of obliterating a\ndump truck."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Heat Blast"
		},

		damage: 70,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card