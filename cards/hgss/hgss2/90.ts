import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-90",
	localId: 90,

	// Card informations
	name: {
		en: "Entei & Raikou LEGEND",
		fr: "Entei & Raikou LÉGENDE (haut)",
	},

	hp: 140,

	type: [
		Type.FIRE,
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/90/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/90/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/90/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi + Sachiko Eba",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque ces Pokémon sont mis K.O., votre adversaire prend 2 cartes Récompense.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
