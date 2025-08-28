import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Igglybuff"
	},

	illustrator: "Miki Tanaka",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Colorless"],

	description: {
		en: "Its body has a faintly sweet scent and is bouncy\nand soft. If it bounces even once, it cannot stop."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Sleepy Lullaby"
		},

		damage: 10,

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 0
}

export default card