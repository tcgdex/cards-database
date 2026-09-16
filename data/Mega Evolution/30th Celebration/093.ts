import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Murkrow"
	},

	illustrator: "Kouki Saitou",
	rarity: "Common",
	category: "Pokemon",
	dexId: [198],
	hp: 80,
	types: ["Darkness"],
	stage: "Basic",

	description: {
		en: "If spotted, it will lure an unwary person into chasing it, then lose the pursuer on mountain trails."
	},

	attacks: [{
		name: {
			en: "Clumsily Clutch"
		},

		cost: ["Darkness"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907700,
				tcgplayer: 716486
			}
		}
	],
}

export default card
