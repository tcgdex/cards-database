import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-111",
	localId: 111,

	// Card informations
	name: {
		en: "Lysandre Labs",
		fr: "Labos Lysandre",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/111/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/111/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/111/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/111/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: {
		id: 1,
		name: "Ryo Ueda"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Les cartes Outil Pokémon en jeu (les vôtres et celles de votre adversaire) n’ont aucun effet.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card

