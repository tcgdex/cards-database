import { Card } from "../../../interfaces"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Fennekin"
	},

	illustrator: "saino misaki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [653],
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Call for Family"
		},

		cost: ["Colorless"],

		effect: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Then, shuffle your deck."
		}
	}, {
		name: {
			en: "Steady Firebreathing"
		},

		cost: ["Fire"],
		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 693484
			}
		}
	],
}

export default card