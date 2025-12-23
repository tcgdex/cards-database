import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Venusaur ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 240,
	types: ["Grass"],

	evolveFrom: {
		en: "Ivysaur"
	},

	description: {
		en: "In order to support its flower, which has grown\nlarger due to Mega Evolution, its back and legs\nhave become stronger."
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Critical Bloom"
		},

		damage: 120,
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned and Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 4
}

export default card