import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Angoliath-V"
	},

	attacks: [{
		name: {
			fr: "Perceuse G-Max"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie Darkness supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon."
		},

		damage: "170+",
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card