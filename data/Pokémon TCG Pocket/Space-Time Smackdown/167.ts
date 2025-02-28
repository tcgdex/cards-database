import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina"
	},

	illustrator: "Rond",
	rarity: "One Star",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		en: "This Pokémon is said to live in a world on the reverse side of ours, where common knowledge is distorted and strange."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Levitate"
		},

		effect: {
			en: "If this Pokémon has any Energy attached, it has no Retreat Cost."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 70,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card
