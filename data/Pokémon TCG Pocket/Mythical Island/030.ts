import { Card } from "../../../interfaces"
import Set from "../Mythical Island"

const card: Card = {
	set: Set,

	name: {
		en: "Dedenne"
	},

	illustrator: "Taiga Kayama",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		en: "It's small and its electricity-generating organ is not fully developed, so it uses its tail to absorb electricity from people's homes and charge itself."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Thunder Shock"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Diamond"
}

export default card
