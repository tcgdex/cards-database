import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-126",
	localId: 126,

	// Card informations
	name: {
		en: "Pokémon Catcher",
		fr: "Attrape-Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/126/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/126/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/126/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/126/high",
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
			fr: "Lancez une pièce. Si c'est face, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
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
