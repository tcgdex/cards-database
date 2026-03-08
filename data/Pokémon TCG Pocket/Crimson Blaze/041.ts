import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Nosepass"
	},

	illustrator: "Miki Tanaka",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		en: "The magnet in Nosepass's nose provides an\nunerring compass, making it an excellent\npartner for Trainers going on a journey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Rising Lunge"
		},

		damage: 10,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2
}

export default card