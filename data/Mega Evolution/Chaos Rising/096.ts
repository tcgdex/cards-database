import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886488,
				tcgplayer: 693553
			}
		},
	],

	name: {
		en: "Tauros"
	},

	illustrator: "Tsuyoshi Nagano",
	rarity: "Illustration rare",
	category: "Pokemon",
	dexId: [128],
	hp: 130,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Crowd Targeting"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Choose 1 of your opponent's Pokémon. Flip a coin for each of your Pokémon with \"Tauros\" in its name. This attack does 50 damage times the number of heads to that Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",
}

export default card