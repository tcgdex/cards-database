import { Card } from "../../../interfaces"
import Set from "../Crimson Blaze"

const card: Card = {
	set: Set,

	name: {
		en: "Basculin"
	},

	illustrator: "Naoyo Kimura",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "Anglers love the fight this Pokémon puts up on\nthe hook. And there are always more to catch—\nmany people release them into lakes illicitly."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Surprise Strike"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			en: "If this Pokémon moved from your Bench to the Active Spot this turn, this attack does 40 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card