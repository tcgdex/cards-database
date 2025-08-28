import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Mew ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Psyshot"
		},

		damage: 20,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Genome Hacking"
		},

		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Choose 1 of your opponent's Active Pokémon's attacks and use it as this attack."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card