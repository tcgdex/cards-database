import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Tropius",
		en: "Tropius"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Main Verte",
			en: "Attach Leaves"
		},

		effect: {
			fr: "Attachez jusqu’à 2 cartes Énergie Grass de votre pile de défausse à vos Pokémon de Banc comme il vous plaît.",
			en: "Attach up to 2 Grass Energy cards from your discard pile to your Benched Pokémon in any way you like."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Tornade",
			en: "Gust"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card