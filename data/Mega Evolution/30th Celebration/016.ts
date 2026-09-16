import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Slowpoke"
	},

	illustrator: "Uninori",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Water"],
	stage: "Basic",

	description: {
		en: "It lazes vacantly near water. If something bites its tail, it won't even notice for a whole day."
	},

	attacks: [{
		name: {
			en: "Well-Hidden"
		},

		cost: ["Colorless"],

		effect: {
			en: "Flip a coin. If heads, during your opponent's next turn, prevent all damage from and effects of attacks done to this Pokémon."
		}
	}, {
		name: {
			en: "Water Gun"
		},

		cost: ["Water", "Colorless"],

		damage: 20,
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907622,
				tcgplayer: 716449
			}
		}
	],
}

export default card
