import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-116",
	localId: 116,

	// Card informations
	name: {
		en: "Tool Scrapper",
		fr: "Arrache-Outil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/116/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/116/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez jusqu'à 2 cartes Outil Pokémon attachées aux Pokémon en jeu (les vôtres ou ceux de votre adversaire) et défaussez-les.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card

