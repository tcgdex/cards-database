import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Dragonite ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 180,
	types: ["Dragon"],

	evolveFrom: {
		en: "Dragonair"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Giga Impact"
		},

		damage: 180,
		cost: ["Water", "Lightning", "Colorless"],

		effect: {
			en: "During your next turn, this Pokémon can't attack."
		}
	}],

	weaknesses: [{
		type: "Colorless",
		value: "+20"
	}],

	retreat: 2
}

export default card