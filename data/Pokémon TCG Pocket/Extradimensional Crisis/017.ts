import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Zebstrika"
	},

	illustrator: "Hajime Kusajima",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	evolveFrom: {
		en: "Blitzle"
	},

	description: {
		en: "When this ill-tempered Pokémon runs wild, it\nshoots lightning from its mane in all directions."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Head Bolt"
		},

		damage: 70,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card