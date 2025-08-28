import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Latios"
	},

	illustrator: "rika",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	description: {
		en: "It understands human speech and is highly\nintelligent. It is a tender Pokémon that\ndislikes fighting."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Fantastical Floating"
		},

		effect: {
			en: "If you have Latias in play, this Pokémon has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Luster Purge"
		},

		damage: 120,
		cost: ["Psychic", "Psychic", "Psychic"],

		effect: {
			en: "Discard all Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card