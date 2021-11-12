import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		fr: "Soporifik"
	},

	category: "Pokemon",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Poussododo"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, choisissez un des Pokémon du Banc de votre adversaire et échangez-le contre le Pokémon Défenseur. Le nouveau Pokémon Défenseur est maintenant Endormi."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Charge"
		},

		damage: 20
	}]
}

export default card