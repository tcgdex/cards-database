import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Decidueye ex",
		fr: "Archéduc-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [724],
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		en: "Dartrix",
		fr: "Efflèche"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Pierce the Pain",
			fr: "Acharnement Perçant"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 100 damage to 1 of your opponent's Pokémon that have damage on them.",
			fr: "Cette attaque inflige 100 dégâts à un des Pokémon de votre adversaire ayant subi des dégâts."
		}
	}, {
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: 80,
		cost: ["Grass", "Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["mega-blaziken"]
}

export default card