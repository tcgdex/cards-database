import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Carnivine"
	},

	illustrator: "Yoriyuki Ikegami",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		en: "It attracts prey with its sweet-smelling saliva, then chomps down. It takes a whole day to eat prey."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Flog"
		},

		damage: "40+",
		cost: ["Grass", "Grass", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 50 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card
