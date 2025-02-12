import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

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

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Mewtwo]
}

export default card
