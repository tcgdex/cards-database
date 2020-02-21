import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Pokémon Circulator",
		fr: "Circulateur de Pokémon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/81/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/81/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: {
		id: 54,
		name: "Hideaki Hakozaki"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Votre adversaire échange son Pokémon Actif avec l'un des Pokémon de son Banc.",
		},
	}],







	rarity: Rarity.Uncommon,

	category: Category.TRAINER,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
