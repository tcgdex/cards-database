import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-92",
	localId: 92,

	// Card informations
	name: {
		en: "Raikou & Suicune LEGEND",
		fr: "Raikou & Suicune LÉGENDE (haut)",
	},

	hp: 160,

	type: [
		Type.LIGHTNING,
		Type.WATER,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/92/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/92/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/92/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/92/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: {
		id: 109,
		name: "Shinji Higuchi + Noriko Takaya"
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

