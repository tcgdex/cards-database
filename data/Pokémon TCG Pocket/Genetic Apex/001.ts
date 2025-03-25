import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Bulbasaur",
		fr: "Bulbizarre"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Vine Whip",
			fr: "Fouet Lianes"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
		fr: "Il a une graine sur son dos depuis sa naissance. Elle grossit un peu chaque jour."
	}
}

export default card
