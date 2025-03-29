import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Weepinbell",
		fr: "Boustiflor"
	},

	illustrator: "Miki Tanaka",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe"
		},

		damage: "40"
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	rarity: "Two Diamond",

	description: {
		en: "The leafy parts act as cutters for slashing foes. It spits a fluid that dissolves everything.",
		fr: "Ses membres en forme de feuilles permettent à Boustiflor de trancher ses adversaires. Il crache un fluide capable de tout dissoudre."
	}
}

export default card
