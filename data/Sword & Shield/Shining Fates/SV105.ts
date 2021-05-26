import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic V"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Festin Forestier"
		},

		effect: {
			fr: "Cherchez dans votre deck jusqu’à 2 Pokémon Grass de base, puis placez-les sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			fr: "Martobois"
		},

		effect: {
			fr: "Ce Pokémon s’inflige aussi 30 dégâts."
		},

		damage: 220,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card