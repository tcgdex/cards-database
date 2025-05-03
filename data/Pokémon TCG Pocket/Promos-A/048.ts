import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy"
	},

	illustrator: "sui",
	rarity: "None",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "It is born with a wondrous power that lets it bond with any kind of Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Oceanic Gift"
		},

		cost: ["Water"],

		effect: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a [Water] Energy from your Energy Zone and attach it to that Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
