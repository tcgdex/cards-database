import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Ambipom"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],

	evolveFrom: {
		en: "Aipom"
	},

	description: {
		en: "It uses its tails for everything. If it wraps both\nof its tails around you and gives you a squeeze,\nthat's proof it really likes you."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Excited Tail"
		},

		damage: 30,
		cost: ["Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads. If this Pokémon has Lucky Mittens attached, flip 4 coins instead."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card