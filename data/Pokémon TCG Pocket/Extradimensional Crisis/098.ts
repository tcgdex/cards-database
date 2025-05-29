import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Aerodactyl"
	},

	illustrator: "Masakazu Fukuda",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Old Amber"
	},

	description: {
		en: "This is a ferocious Pokémon from ancient times.\nApparently even modern technology is incapable\nof producing a perfectly restored specimen."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Primal Wingbeat"
		},

		cost: ["Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, your opponent shuffles their Active Pokémon into their deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card