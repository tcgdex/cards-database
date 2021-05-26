import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Badabouin"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	evolveFrom: {
		fr: "Ouistempo"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Avantage du Terrain"
		},

		effect: {
			fr: "Si vous avez un Stade en jeu, ce Pokémon n’a pas de Coût de Retraite."
		}
	}],

	attacks: [{
		name: {
			fr: "Tapotige"
		},

		damage: 20,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card