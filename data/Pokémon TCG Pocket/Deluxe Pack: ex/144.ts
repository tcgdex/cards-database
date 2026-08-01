import { Card } from "../../../interfaces"
import Set from "../Deluxe Pack: ex"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu"
	},

	illustrator: "imoniii",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "It's one of the kinds of Pokémon with electric\ncheek pouches. It shoots charges from its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Take a {L} Energy from your Energy Zone and attach it to 1 of your Benched {L} Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1
}

export default card