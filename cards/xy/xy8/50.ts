import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-50",
	localId: 50,

	// Card informations
	name: {
		en: "Raichu BREAK",
		fr: "Raichu TURBO",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/50/high",
		},
	},

	evolveFrom: {
		en: "Raichu",
		fr: "Raichu",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Grand Bolt",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard all Energy attached to this Pokémon.",
		},
		damage: 170
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Foudre Grandiose",
		},
		text: {
			fr: "Défaussez toutes les Énergies attachées à ce Pokémon.",
		},
		damage: 170
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
