import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "Thanks to its unstable genetic makeup, this special Pokémon conceals many different possible evolutions."
	},

	attacks: [{
		name: {
			en: "Quick Attack"
		},

		cost: ["Colorless", "Colorless"],

		damage: "20+",

		effect: {
			en: "Flip a coin. If heads, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907725,
				tcgplayer: 696833
			}
		}
	],
}

export default card
