import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Jangmo-o"
	},

	illustrator: "miki kudo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [782],
	hp: 70,
	types: ["Dragon"],
	stage: "Basic",

	description: {
		en: "They communicate with their allies using the sounds their scales make when struck. A group of these Pokémon causes quite a racket."
	},

	attacks: [{
		name: {
			en: "Screech"
		},

		cost: ["Colorless"],

		effect: {
			en: "During your next turn, the Defending Pokémon takes 30 more damage from attacks (after applying Weakness and Resistance)."
		}
	}, {
		name: {
			en: "Dragon Claw"
		},

		cost: ["Lightning", "Fighting"],

		damage: 40,
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 907717,
				tcgplayer: 716503
			}
		}
	],
}

export default card
