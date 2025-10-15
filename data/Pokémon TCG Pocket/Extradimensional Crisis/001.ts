import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Petilil",
		fr: "Chlorobule"
	},

	illustrator: "sui",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "The leaves on its head grow right back even if\nthey fall out. These bitter leaves refresh those\nwho eat them.",
		fr: "Les feuilles sur sa tête repoussent très vite. Elles sont fort amères, mais elles revigorent les corps les plus éreintés."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1
}

export default card