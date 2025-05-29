import { Card } from "../../../interfaces"
import Set from "../Extradimensional Crisis"

const card: Card = {
	set: Set,

	name: {
		en: "Ferrothorn"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	evolveFrom: {
		en: "Ferroseed"
	},

	description: {
		en: "This Pokémon scrapes its spikes across rocks,<br />and then uses the tips of its feelers to absorb<br />the nutrients it finds within the stone."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Steel Spikes"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is damaged by an attack from your opponent's Pokémon, do 20 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spinning Attack"
		},

		damage: 70,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 3
}

export default card