import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-20",
	localId: 20,

	// Card informations
	name: {
		en: "Super Rod",
		fr: "Méga Canne",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/20/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/20/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/20/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Choisissez une combinaison de 3 cartes de Pokémon et d'Énergies de base dans votre pile de défausse et mélangez-les avec votre deck.",
		},
	}],







	rarity: Rarity.RareHolo,

	category: Category.TRAINER,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
