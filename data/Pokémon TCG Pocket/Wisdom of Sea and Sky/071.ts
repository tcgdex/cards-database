import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou",
		fr: "Raikou"
	},

	illustrator: "Kazumasa Yasukuni",
	rarity: "Three Diamond",
	category: "Pokemon",

	dexId: [243],
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "The rain clouds it carries let it fire thunderbolts\nat will. They say that it descended with lightning.",
		fr: "Le nuage de pluie qu'il porte peut relâcher la foudre à volonté. On dit de lui qu'il est venu avec l'orage."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder",
			fr: "Fatal-Foudre"
		},

		damage: 70,
		cost: ["Lightning", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card