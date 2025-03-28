import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Ivysaur"
	},
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf"
		},

		damage: "60"
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Giant Bloom"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond"
}

export default card
