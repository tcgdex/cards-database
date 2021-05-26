import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Luxray"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Luxio"
	},

	attacks: [{
		name: {
			fr: "Razzia Obscure"
		},

		effect: {
			fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Éclair Frontal"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card