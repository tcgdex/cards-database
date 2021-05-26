import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Galvagon"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Fossile Rare"
	},

	attacks: [{
		name: {
			fr: "Amplificateur"
		},

		effect: {
			fr: "Pendant votre prochain tour, l’attaque Amplificateur de ce Pokémon inflige 90 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance)."
		},

		damage: 30,
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Giga Impact"
		},

		effect: {
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas attaquer."
		},

		damage: 200,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4
}

export default card