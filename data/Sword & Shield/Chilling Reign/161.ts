import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Braségali V",
		en: "Blaziken V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 210,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Pied Voltige",
			en: "High Jump Kick"
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			fr: "Danse Flammes",
			en: "Fire Spin"
		},

		effect: {
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			en: "Discard 2 Energy from this Pokémon."
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