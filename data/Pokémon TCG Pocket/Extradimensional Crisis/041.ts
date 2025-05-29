import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Krookodile"
	},

	illustrator: "Naoki Saito",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	evolveFrom: {
		en: "Krokorok"
	},

	description: {
		en: "After clamping down with its powerful jaws, it\ntwists its body around to rip its prey in half."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Poaching Fangs"
		},

		damage: 90,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Flip 3 coins. For each heads, a card is chosen at random from your opponent's hand. Your opponent reveals that card and shuffles it into their deck."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3
}

export default card