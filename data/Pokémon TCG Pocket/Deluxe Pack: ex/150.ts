import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Zeraora"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		en: "It electrifies its claws and tears its opponents\napart with them. Even if they dodge its attack,\nthey'll be electrocuted by the flying sparks."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Thunderclap Flash"
		},

		effect: {
			en: "At the end of your first turn, take a {L} Energy from your Energy Zone and attach it to this Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Lightning Claw"
		},

		damage: 50,
		cost: ["Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card