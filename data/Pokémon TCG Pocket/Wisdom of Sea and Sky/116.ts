import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Weavile",
		fr: "Dimoret"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	evolveFrom: {
		en: "Sneasel"
	},

	description: {
		en: "Evolution made it even more devious.\nIt communicates by clawing signs in boulders.",
		fr: "L'évolution l'a rendu encore plus retors. Il communique en gravant des marques dans les pierres avec ses griffes."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slash",
			fr: "Tranche"
		},

		damage: 50,
		cost: ["Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["lugia"]
}

export default card