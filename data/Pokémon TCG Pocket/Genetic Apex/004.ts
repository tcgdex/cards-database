import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venusaur ex",
		fr: "Florizarre ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],
	stage: "Stage2",
	evolveFrom: {
		en: "Ivysaur",
		fr: "Herbizarre"
	},
	suffix: "EX",

	attacks: [{
		cost: ["Grass", "Colorless", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: "60"
	}, {
		cost: ["Grass", "Grass", "Colorless", "Colorless"],

		name: {
			en: "Giant Bloom",
			fr: "Pousse Géante"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
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
