import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Magcargo"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	evolveFrom: {
		en: "Slugma"
	},

	description: {
		en: "Its brittle shell occasionally spouts intense flames that circulate throughout its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Searing Flame"
		},

		damage: 30,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card
