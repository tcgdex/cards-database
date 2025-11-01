import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory ex",
		fr: "Airmure-ex"
	},

	illustrator: "toriyufu",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 140,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Steel Wing",
			fr: "Ailes d'Acier"
		},

		damage: 70,
		cost: ["Metal", "Metal"],

		effect: {
			en: "During your opponent's next turn, this Pokémon takes −20 damage from attacks.",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh"]
}

export default card