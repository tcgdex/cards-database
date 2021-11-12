import { Card } from "../../../interfaces"
import Set from "../Aquapolis"

const card: Card = {
	set: Set,

	name: {
		fr: "Porygon"
	},

	category: "Pokemon",

	attacks: [{
		cost: ["Colorless"],

		name: {
			fr: "Tri de données"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, choisissez une carte Dresseur de votre pile de défausse, montrez-la à votre adversaire, et mélangez-la ensuite dans votre deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			fr: "Koud'bec"
		},

		damage: 10
	}]
}

export default card