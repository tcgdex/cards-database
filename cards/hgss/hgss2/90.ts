import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss2/90/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/90/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/90/high.png",
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
			fr: "Lorsque ces Pokémon sont mis K.O., votre adversaire prend 2 cartes Récompense.",
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

