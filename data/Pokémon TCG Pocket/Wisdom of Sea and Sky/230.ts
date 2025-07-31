import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Lickitung"
	},

	illustrator: "MAHOU",
	rarity: "One Shiny",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "If this Pokémon's sticky saliva gets on you and\nyou don't clean it off, an intense itch will set in.\nThe itch won't go away, either."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Tongue Slap"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 2
}

export default card