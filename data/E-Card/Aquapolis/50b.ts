import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		fr: "Akwakwak"
	},

	category: "Pokemon",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Tranche"
		},

		damage: 20
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			fr: "Rayon de distorsion"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Défenseur est maintenant Endormi. Si c'est pile, le Pokémon Défenseur est maintenant Confus."
		},

		damage: 30
	}]
}

export default card