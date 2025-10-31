import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Whimsicott ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],

	evolveFrom: {
		en: "Cottonee"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Grass Knot"
		},

		damage: 40,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Energy in your opponent's Active Pokémon's Retreat Cost."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card