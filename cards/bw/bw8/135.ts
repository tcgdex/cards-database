import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-135",
	localId: 135,

	// Card informations
	name: {
		en: "Colress",
		fr: "Nikolaï",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/135/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/135/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/135/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/135/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: {
		id: 40,
		name: "Kanako Eo"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez un nombre de cartes égal au nombre de Pokémon de Banc (les vôtres et ceux de votre adversaire).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card

