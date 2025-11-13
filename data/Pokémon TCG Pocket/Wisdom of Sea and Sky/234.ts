import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Gyarados ex",
		fr: "Léviator-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Water"],

	evolveFrom: {
		en: "Magikarp"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Rampaging Whirlpool",
			fr: "Tourbillon Tempétueux"
		},

		damage: 140,
		cost: ["Water", "Water", "Water", "Colorless"],

		effect: {
			en: "Discard a random Energy from among the Energy attached to all Pokémon (both yours and your opponent's).",
			fr: "Défaussez une Énergie au hasard parmi celles attachées à tous les Pokémon en jeu (les vôtres et ceux de votre adversaire)."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lugia"]
}

export default card