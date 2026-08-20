import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [70],
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	description: {
		en: "The leafy parts act as cutters for slashing foes.\nIt spits a fluid that dissolves everything.",
		fr: "Ses membres en forme de feuilles permettent\\nà Boustiflor de trancher ses adversaires.\\nIl crache un fluide capable de tout dissoudre."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: 40,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-altaria"]
}

export default card