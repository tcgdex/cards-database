import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Piplup"
	},

	illustrator: "Kariya",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		en: "It doesn't like to be taken care of. It's difficult to bond with since it won't listen to its Trainer."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Nap"
		},

		cost: ["Colorless"],

		effect: {
			en: "Heal 20 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card

