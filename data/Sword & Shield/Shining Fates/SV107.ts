import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dracaufeu VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		fr: "Dracaufeu-V"
	},

	attacks: [{
		name: {
			fr: "Tranch’Griffe"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Fournaise G-Max"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card