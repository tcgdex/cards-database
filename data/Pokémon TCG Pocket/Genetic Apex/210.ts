import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl"
	},

	illustrator: "Naoyo Kimura",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Stage1",
	evolveFrom: {
		en: "Old Amber"
	},

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Primal Wingbeat"
		},

		effect: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon back into their deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Diamond",

	description: {
		en: "This is a ferocious Pokémon from ancient times. Apparently even modern technology is incapable of producing a perfectly restored specimen.",
	}
}

export default card
