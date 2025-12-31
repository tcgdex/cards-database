import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Altaria"
	},

	illustrator: "sui",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Swablu"
	},

	description: {
		en: "On sunny days, it flies freely through the sky and\nblends into the clouds. It sings in a beautiful\nsoprano."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Do the Wave"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"],

		effect: {
			en: "This attack does 20 more damage for each of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,

	boosters: ["mega-altaria"]
}

export default card