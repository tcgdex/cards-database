import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Eevee"
	},

	illustrator: "MAHOU",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Colorless"],

	description: {
		en: "Its genetic code is irregular. It may mutate if it is\nexposed to radiation from element stones."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Boosted Evolution"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, it can evolve during your first turn or the turn you play it."
		}
	}],

	attacks: [{
		name: {
			en: "Stampede"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card