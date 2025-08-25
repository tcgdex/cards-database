import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Cherubi"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	description: {
		en: "It nimbly dashes about to avoid getting pecked\nby bird Pokémon that would love to make off\nwith its small, nutrient-rich storage ball."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "En-fruits-iastic"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, attacks used by this Pokémon cost 1 less {G} Energy."
		}
	}],

	attacks: [{
		name: {
			en: "Sweets Relay"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "If 1 of your Pokémon used Sweets Relay during your last turn, this attack does 20 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card