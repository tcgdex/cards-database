import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Volcarona",
		fr: "Pyrax"
	},

	illustrator: "Mika Pikazo",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Larvesta",
		fr: "Pyronille"
	},

	attacks: [{
		name: {
			en: "Combustion",
			fr: "Fournaise"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Fire Spin",
			fr: "Danse Flammes"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon."
		},

		damage: 170,
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card