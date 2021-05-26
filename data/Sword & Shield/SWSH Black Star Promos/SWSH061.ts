import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		fr: "Pikachu V"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Common",
	category: "Pokemon",
	hp: 190,
	types: ["Lightning"],

	attacks: [{
		name: {
			fr: "Chargeur"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Énergie Lightning, puis attachez-les à ce Pokémon. Mélangez ensuite votre deck."
		},

		cost: ["Lightning"]
	}, {
		name: {
			fr: "Tonnerre"
		},

		effect: {
			fr: "Défaussez toute l’Énergie de ce Pokémon."
		},

		damage: 200,
		cost: ["Lightning", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card