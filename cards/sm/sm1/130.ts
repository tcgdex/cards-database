import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-130",
	localId: 130,

	// Card informations
	name: {
		en: "Repel",
		fr: "Repousse",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/130/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/130/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/130/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/130/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 71,
		name: "Yoshinobu Saito"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

