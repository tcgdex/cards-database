import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886400,
				tcgplayer: 693558
			}
		},
	],

	name: {
		en: "Vulpix"
	},

	illustrator: "Yoshimoto Yoshimon",
	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Singe"
		},

		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
}

export default card