import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Shuckle ex",
		fr: "Caratroc-ex"
	},

	illustrator: "Yoshimi Miyoshi",
	rarity: "Two Star",
	category: "Pokemon",

	dexId: [213],
	hp: 120,
	types: ["Grass"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Solid Shell",
			fr: "Coquille Dure"
		},

		effect: {
			en: "This Pokémon takes −20 damage from attacks.",
			fr: "Ce Pokémon subit − 20 dégâts provenant des attaques."
		}
	}],

	attacks: [{
		name: {
			en: "Triple Slap",
			fr: "Triple Gifle"
		},

		damage: 20,
		cost: ["Grass"],

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card