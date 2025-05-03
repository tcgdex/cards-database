import { Card } from "../../../interfaces"
import Set from "../Shining Revelry"

const card: Card = {
	set: Set,

	name: {
		en: "Pachirisu"
	},

	illustrator: "Tomowaka",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "It's one of the kinds of Pokémon with electric cheek pouches. It shoots charges from its tail."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Plasma"
		},

		damage: 10,
		cost: ["Lightning"],

		effect: {
			en: "Take a [Lightning] Energy from your Energy Zone and attach it to 1 of your Benched  Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "One Shiny"
}

export default card