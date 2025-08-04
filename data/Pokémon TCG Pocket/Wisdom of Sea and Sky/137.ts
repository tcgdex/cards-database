import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2"
	},

	description: {
		en: "Porygon-Z had a program installed to allow it to\nmove between dimensions, but the program also\ncaused instability in Porygon-Z's behavior."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Slowing Beam"
		},

		damage: 70,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "During your opponent's next turn, attacks used by the Defending Pokémon cost 1 {C} more."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card