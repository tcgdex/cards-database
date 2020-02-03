import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-163",
	localId: 163,

	// Card informations
	name: {
		en: "Field Blower",
		fr: "Nettoyage de Terrain",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/163/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/163/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/163/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/163/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 13,
		name: "Toyste Beach"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez jusqu’à 2 cartes Outil Pokémon ou cartes Stade en jeu, (les vôtres ou celles de votre adversaire), quelle que soit la combinaison, et défaussez-les.",
		},
	}],







	rarity: Rarity.Rare,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card

