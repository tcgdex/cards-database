import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax ex"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Full-Mouth Manner"
		},

		effect: {
			en: "At the end of your turn, if this Pokémon is in the Active Spot, heal 20 damage from it."
		}
	}],

	attacks: [{
		name: {
			en: "Flop-Down Punch"
		},

		damage: 130,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4
}

export default card