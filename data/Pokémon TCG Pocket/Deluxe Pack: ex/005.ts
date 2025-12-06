import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	evolveFrom: {
		en: "Ivysaur"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Razor Leaf"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"]
	}, {
		name: {
			en: "Giant Bloom"
		},

		damage: 100,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "Heal 30 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card