import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Zangoose"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	description: {
		en: "It's Seviper's archrival. To threaten those\nit encounters, it fans out the claws on its\nfront paws."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Counterattack"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Slash"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card