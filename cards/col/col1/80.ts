import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Lost Remover",
		fr: "Nettoyeur perdu",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/80/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/80/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/80/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 41,
		name: "Wataru Kawahara"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Placez 1 carte Énergie spéciale attachée à l’un des Pokémon de votre adversaire dans la Zone Perdue.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

