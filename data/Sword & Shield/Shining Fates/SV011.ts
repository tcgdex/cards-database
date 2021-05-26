import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Blancoton"
	},

	illustrator: "Mizue",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],

	evolveFrom: {
		fr: "Tournicoton"
	},

	attacks: [{
		name: {
			fr: "Bénédiction Douillette"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 3 cartes Énergie Grass, puis attachez-les à vos Pokémon de Banc comme il vous plaît. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Feuillage"
		},

		damage: 30,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card