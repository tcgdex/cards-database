import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Venonat",
		fr: "Mimitoss"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Tackle",
			fr: "Charge"
		},

		damage: "20"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond",

	description: {
		en: "Poison oozes from all over its body. It catches small bug Pokémon at night that are attracted by light.",
		fr: "Son corps sécrète un poison redoutable. La nuit il capture de petits Pokémon insectes attirés par la lumière."
	}
}

export default card
