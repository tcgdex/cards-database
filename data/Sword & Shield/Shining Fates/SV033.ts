import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Frissonille",
		en: "Snom"
	},

	illustrator: "Yumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Appel à la Famille",
			en: "Call for Family"
		},

		effect: {
			fr: "Cherchez dans votre deck un Pokémon de base, puis placez-le sur votre Banc. Mélangez ensuite votre deck.",
			en: "Search your deck for a Basic Pokémon and put it onto your Bench. Then, shuffle your deck."
		},

		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "D"
}

export default card