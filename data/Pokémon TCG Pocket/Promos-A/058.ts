import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu"
	},

	illustrator: "OOYAMA",
	rarity: "None",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "It’s one of the kinds of Pokémon with electric cheek pouches. It shoots charges from its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma"
		},

		cost: ["Lightning"],
		damage: 10,

		effect: {
			en: "Take a [Lightning] Energy from your Energy Zone and attach it to 1 of your Benched [Lightning] Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card
