import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Wellspring Mask Ogerpon"
	},

	illustrator: "Mina Nakai",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Water"],

	description: {
		en: "In this form, it draws on the power of water.\nIt attacks unrelentingly with kicks and ivy strikes."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Wellspring Dance"
		},

		damage: 40,
		cost: ["Water", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack also does 40 damage to 1 of your opponent's Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card