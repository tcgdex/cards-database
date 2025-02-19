import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "None",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "People fashion swords from Skarmory's shed feathers, so this Pokémon is a popular element in heraldic designs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Metal Arms"
		},

		damage: "20+",
		cost: ["Metal"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card
