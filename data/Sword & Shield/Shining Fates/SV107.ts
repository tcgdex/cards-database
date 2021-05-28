import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dracaufeu VMAX",
		en: "Charizard VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Fire"],

	evolveFrom: {
		fr: "Dracaufeu-V",
		en: "Charizard V"
	},

	attacks: [{
		name: {
			fr: "Tranch’Griffe",
			en: "Claw Slash"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Fournaise G-Max",
			en: "G-Max Wildfire"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
		},

		damage: 300,
		cost: ["Fire", "Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card