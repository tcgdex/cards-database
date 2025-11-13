import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Magikarp",
		fr: "Magicarpe"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 30,
	types: ["Water"],

	description: {
		en: "An underpowered, pathetic Pokémon. It may\njump high on rare occasions but never more\nthan seven feet.",
		fr: "Un Pokémon tout à fait pathétique. En de très rares occasions, il est capable de sauter haut, mais jamais à plus de deux mètres."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Splashing Dodge",
			fr: "Bondir"
		},

		damage: 10,
		cost: ["Water"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon.",
			fr: "Échangez ce Pokémon contre l'un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["lugia"]
}

export default card