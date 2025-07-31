import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Furret"
	},

	illustrator: "tetsuya koizumi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Sentret"
	},

	description: {
		en: "The mother puts its offspring to sleep by curling up\naround them. It corners foes with speed."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Tail Smash"
		},

		damage: 80,
		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card