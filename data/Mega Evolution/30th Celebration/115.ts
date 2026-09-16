import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Ditto"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [132],
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	description: {
		en: "It can freely recombine its own cellular structure to transform into other life-forms."
	},

	attacks: [{
		name: {
			en: "Surprisingly Transform"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, search your deck for a Pokémon and switch it with this Pokémon. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon. If you switched a Pokémon in this way, put this card into your deck. Then, shuffle your deck."
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
				cardmarket: 907722,
				tcgplayer: 716507
			}
		}
	],
}

export default card
