import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggcute"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [102],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	description: {
		en: "Using telepathy only fellow Exeggcute can pick up on, they always form a cluster of six."
	},

	attacks: [{
		name: {
			en: "Hypnosis"
		},

		cost: ["Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907607,
				tcgplayer: 716435
			}
		}
	],
}

export default card
