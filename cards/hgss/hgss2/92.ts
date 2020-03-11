import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/92/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/92/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi + Noriko Takaya",



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
