import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tutafeh de Galar"
	},

	illustrator: "sowsow",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Attaque Imprudente"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 50,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card