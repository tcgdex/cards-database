import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both of its tails around you and gives you a squeeze, that's proof it really likes you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Double Hit"
		},

		damage: "40×",
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 40 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
