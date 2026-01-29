import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Stunfisk"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "Its conspicuous lips lure prey in as it lies in wait in\nthe mud. When prey gets close, Stunfisk clamps\nits jagged steel fins down on them."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Snapping Trap"
		},

		damage: 40,
		cost: ["Metal", "Colorless"],

		effect: {
			en: "During your opponent's next turn, if this Pokémon is in the Active Spot when your opponent's Active Pokémon retreats, this attack does 40 damage to the new Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2
}

export default card