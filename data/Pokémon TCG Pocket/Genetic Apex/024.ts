import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela",
		fr: "Saquedeneu"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Absorb",
			fr: "Vole-Vie"
		},

		effect: {
			en: "Heal 10 damage from this Pokémon.",
			fr: "Soignez 10 dégâts de ce Pokémon."
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "One Diamond",

	description: {
		en: "Hidden beneath a tangle of vines that grows nonstop even if the vines are torn off, this Pokémon's true appearance remains a mystery.",
		fr: "On ne sait toujours pas ce qui se cache sous ses lianes. Même si on les coupe, elles repoussent à l'infini."
	}
}

export default card
