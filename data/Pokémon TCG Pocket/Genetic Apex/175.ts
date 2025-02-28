import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Muk"
	},

	illustrator: "Hajime Kusajima",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],
	stage: "Stage1",
	evolveFrom: {
		en: "Grimer"
	},

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Venoshock"
		},

		effect: {
			en: "If your opponent's Active Pokémon is Poisoned, this attack does 50 more damage."
		},

		damage: "70+"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Three Diamond",

	description: {
		en: "It's thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.",
	}
}

export default card
