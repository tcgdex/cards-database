import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Oricorio"
	},

	illustrator: "Jerky",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "This form of Oricorio has sipped yellow nectar. It uses nimble steps to approach opponents, then knocks them out with electric punches."
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Safeguard"
		},

		effect: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon ex."
		}
	}],

	attacks: [{
		name: {
			en: "Zzzap"
		},

		damage: 50,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card