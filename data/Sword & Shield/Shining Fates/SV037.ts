import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Hydragla"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],

	evolveFrom: {
		fr: "Fossile Rare"
	},

	attacks: [{
		name: {
			fr: "Visage Dur"
		},

		effect: {
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 60 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		},

		damage: 90,
		cost: ["Water", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Souffle Froid"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi."
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card