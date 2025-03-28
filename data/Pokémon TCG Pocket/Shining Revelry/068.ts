import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Cyclizar"
	},

	illustrator: "HAGIYA Kaoru",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "Apparently Cyclizar has been allowing people to ride on its back since ancient times. Depictions of this have been found in 10,000-year-old murals."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Overacceleration"
		},

		damage: 20,
		cost: ["Colorless"],

		effect: {
			en: "During your next turn, this Pokémon's Overacceleration attack does +20 damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card