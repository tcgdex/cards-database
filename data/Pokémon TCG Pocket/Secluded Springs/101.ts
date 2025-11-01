import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Infernape ex",
		fr: "Simiabraz-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard all {R} Energy from this Pokémon.",
			fr: "Défaussez toutes les Énergies {R} de ce Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0
}

export default card