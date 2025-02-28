import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Cresselia ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "None",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Lunar Plumage"
		},

		effect: {
			en: "Whenever you attach a <span class=\"energy-text energy-text--type-psychic\"></span> Energy from your Energy Zone to this Pokémon, heal 20 damage from this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Psychic Flash"
		},

		damage: 80,
		cost: ["Psychic", "Psychic", "Colorless"],
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card
