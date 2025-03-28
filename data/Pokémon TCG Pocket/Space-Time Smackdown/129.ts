import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Porygon-Z"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Porygon2"
	},

	description: {
		en: "Porygon-Z had a program installed to allow it to move between dimensions, but the program also caused instability in Porygon-Z's behavior."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Buggy Beam"
		},

		damage: 80,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Change the type of the next Energy that will be generated for your opponent to 1 of the following at random: <span class=\"energy-text energy-text--type-grass\"></span>, <span class=\"energy-text energy-text--type-fire\"></span>, <span class=\"energy-text energy-text--type-water\"></span>, <span class=\"energy-text energy-text--type-lightning\"></span>, <span class=\"energy-text energy-text--type-psychic\"></span>, <span class=\"energy-text energy-text--type-fighting\"></span>, <span class=\"energy-text energy-text--type-darkness\"></span>, or <span class=\"energy-text energy-text--type-metal\"></span>."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card
