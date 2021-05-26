import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Blancoton"
	},

	illustrator: "kodama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournicoton"
	},

	attacks: [{
		name: {
			fr: "Graines Fortifiantes"
		},

		effect: {
			fr: "Soignez tous les dégâts de l’un de vos Pokémon de Banc."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Attaque Surprise"
		},

		effect: {
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien."
		},

		damage: 50,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card