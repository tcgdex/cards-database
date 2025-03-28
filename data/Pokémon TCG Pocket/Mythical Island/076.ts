import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Rampaging Whirlpool"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Two Star"
}

export default card