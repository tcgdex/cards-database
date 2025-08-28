import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Stunfisk"
	},

	illustrator: "Akira Komayama",
	rarity: "One Star",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "Thanks to bacteria that lived in the mud flats with\nit, this Pokémon developed the organs it uses to\ngenerate electricity."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Static Shock"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card