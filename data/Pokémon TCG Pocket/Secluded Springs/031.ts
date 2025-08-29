import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Boltund"
	},

	illustrator: "Tomomi Ozaki",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Yamper"
	},

	description: {
		en: "This Pokémon generates electricity and channels\nit into its legs to keep them going strong.\nBoltund can run nonstop for three full days."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Defiant Spark"
		},

		damage: 70,
		cost: ["Lightning", "Colorless", "Colorless"],

		effect: {
			en: "If this Pokémon has damage on it, this attack can be used for 1 {L} Energy."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card