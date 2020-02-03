import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-94",
	localId: 94,

	// Card informations
	name: {
		en: "Suicune & Entei LEGEND",
		fr: "Suicune & Entei LÉGENDE (haut)",
	},

	hp: 140,

	type: [
		Type.WATER,
		Type.FIRE,
	],

	dexId: 244,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/94/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/94/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/94/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/94/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 108,
		name: "Shinji Higuchi + Sachiko Eba"
	},



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque ce Pokémon est mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],







	rarity: Rarity.LEGEND,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card

