import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Aipom"
	},

	illustrator: "Shibuzoh.",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		en: "As it did more and more with its tail, its hands\nbecame clumsy. It makes its nest high in\nthe treetops."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Double Hit"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 20 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card