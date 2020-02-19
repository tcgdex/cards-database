import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-58",
	localId: 58,

	// Card informations
	name: {
		en: "Damage Mover",
		fr: "Déplace Dégâts",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/58/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/58/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/58/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/58/high.png",
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
			fr: "Déplacez 3 marqueurs de dégâts de l’un de vos Pokémon vers un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card

