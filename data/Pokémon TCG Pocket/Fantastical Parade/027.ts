import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Hearthflame Mask Ogerpon"
	},

	illustrator: "Nurikabe",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],

	description: {
		en: "In this form, it draws on the power of fire.\nIt spears its enemies with thorn-covered ivy."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Hearthflame Dance"
		},

		damage: 40,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, take 2 {R} Energy from your Energy Zone and attach it to 1 of your Benched Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 1
}

export default card