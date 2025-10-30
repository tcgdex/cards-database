import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hariyama"
	},

	illustrator: "Scav",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	evolveFrom: {
		en: "Makuhita"
	},

	description: {
		en: "It stomps on the ground to build power.\nIt can send a 10-ton truck flying with a\nstraight-arm punch."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Slapping Knockdown"
		},

		damage: 110,
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		effect: {
			en: "Before doing damage, discard all Pokémon Tools from your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 4
}

export default card