import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Vileplume"
	},

	illustrator: "Kyoko Umemoto",
	category: "Pokemon",
	hp: 140,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Gloom"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Soothing Scent"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep"
		},

		damage: "80"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It has the world's largest petals. With every step, the petals shake out heavy clouds of toxic pollen.",
	}
}

export default card
