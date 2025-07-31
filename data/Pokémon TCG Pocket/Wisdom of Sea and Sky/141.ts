import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl"
	},

	illustrator: "Nisota Niso",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot"
	},

	description: {
		en: "Its eyes are specially developed to enable it to\nsee clearly even in murky darkness and minimal light."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Fly"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If tails, this attack does nothing. If heads, during your opponent's next turn, prevent all damage from—and effects of—attacks done to this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card