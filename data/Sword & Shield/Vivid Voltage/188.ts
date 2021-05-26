import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu VMAX"
	},

	illustrator: "aky CG Works",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Pikachu-V"
	},

	attacks: [{
		name: {
			fr: "Électacle G-Max"
		},

		effect: {
			fr: "Vous pouvez défausser toute l’Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 150 dégâts supplémentaires."
		},

		damage: "120+",
		cost: ["Lightning", "Lightning", "Lightning"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2
}

export default card