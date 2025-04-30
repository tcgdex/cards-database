import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Pyukumuku"
	},

	illustrator: "You Iribi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It lives in warm, shallow waters. If it encounters a foe, it will spit out its internal organs as a means to punch them."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Innards Out"
		},

		effect: {
			en: "If this Pokémon is in the Active Spot and is Knocked Out by damage from an attack from your opponent's Pokémon, do 50 damage to the Attacking Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Sprinkle Water"
		},

		damage: 20,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card