import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Shuppet",
		fr: "Polichombr",
		es: "Shuppet",
		it: "Shuppet",
		pt: "Shuppet",
		de: "Shuppet"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Tongue Slap",
			fr: "Gros Coup de Langue",
			es: "Bofetón Lengua",
			it: "Linguasberla",
			pt: "Tapa de Língua",
			de: "Zungenschelle"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card