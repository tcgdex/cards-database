import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Shelgon"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	evolveFrom: {
		en: "Bagon"
	},

	description: {
		en: "Its armored body makes all attacks bounce off.\nThe armor is too tough, however, making it heavy\nand somewhat sluggish."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Rolling Tackle"
		},

		damage: 60,
		cost: ["Fire", "Water"]
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 3
}

export default card