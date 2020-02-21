import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-150",
	localId: 150,

	// Card informations
	name: {
		en: "Lana",
		fr: "Néphie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/150/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/150/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/150/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/150/high",
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
			fr: "Soignez 50 dégâts à chacun de vos Pokémon auquel de l’Énergie Water est attachée.",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une seule carte Supporter pendant votre tour (avant votre attaque).",
		},
	}],







	rarity: Rarity.RareUltra,

	category: Category.TRAINER,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
