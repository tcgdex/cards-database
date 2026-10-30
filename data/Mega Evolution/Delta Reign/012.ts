import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Sprigatito",
		fr: "Poussacha"
	},

	illustrator: "Makura Tami",
	rarity: "Common",
	category: "Pokemon",
	dexId: [906],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Play Rough",
			fr: "Câlinerie"
		},

		cost: ["Grass"],

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires."
		},

		damage: "10+"
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	description: {
		en: "The sweet scent its body gives off mesmerizes those around it. The scent grows stronger when this Pokémon is in the sun.",
		fr: "Il dégage une odeur sucrée qui fascine les êtres alentour. Celle-ci est plus forte lorsqu'il est exposé au soleil."
	},

	variants: [
		{ type: "normal" },
		{ type: "reverse" }
	],
}

export default card
