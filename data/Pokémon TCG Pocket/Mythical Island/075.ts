import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Celebi ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Powerful Bloom"
		},

		damage: "50×",
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Flip a coin for each Energy attached to this Pokémon. This attack does 50 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star"
}

export default card
