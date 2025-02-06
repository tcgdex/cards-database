import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Dubwool"
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Wooloo"
	},

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rolling Tackle"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "Weave a carpet from its springy wool, and you end up with something closer to a trampoline. You'll start to bounce the moment you set foot on it.",
	}
}

export default card
