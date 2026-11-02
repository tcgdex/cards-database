import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Raikou ex"
	},

	illustrator: "Oku",
	rarity: "Special illustration rare",
	category: "Pokemon",
	dexId: [243],
	hp: 200,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "ex",

	attacks: [{
		name: {
			en: "Thunder-Clad"
		},

		cost: ["Lightning"],

		effect: {
			en: "If you go first, you can use this attack during your first turn. Search your deck for an Energy card and attach it to this Pokémon. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Power Rush"
		},

		cost: ["Lightning", "Lightning", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, during your next turn, this Pokémon can't use attacks."
		},

		damage: 200
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 0,
	regulationMark: "J",

	variants: [
		{ type: "holo" }
	],
}

export default card
