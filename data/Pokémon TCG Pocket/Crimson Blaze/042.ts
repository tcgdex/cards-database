import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Lopunny ex"
	},

	illustrator: "PLANETA Yamashita",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 190,
	types: ["Fighting"],

	evolveFrom: {
		en: "Buneary"
	},

	description: {
		en: "It swings its ears like whips and strikes its\nenemies with them. It has an intensely\ncombative disposition."
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Rapid Smashers"
		},

		damage: 90,
		cost: ["Fighting", "Fighting"],

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads. Your opponent's Active Pokémon is now Confused."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 1
}

export default card