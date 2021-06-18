import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Blaziken V",
		fr: "Braségali V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			en: "Fire Spin",
			fr: "Danse Flammes"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 210,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card