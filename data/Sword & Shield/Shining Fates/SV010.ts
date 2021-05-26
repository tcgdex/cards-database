import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tournicoton"
	},

	illustrator: "Kyoko Umemoto",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Appel à la Famille"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 3 Pokémon de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Tranch’Herbe"
		},

		damage: 10,
		cost: ["Grass"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card