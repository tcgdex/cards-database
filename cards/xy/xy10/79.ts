import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-79",
	localId: 79,

	// Card informations
	name: {
		en: "Lugia BREAK",
		fr: "Lugia TURBO",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 249,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/79/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/79/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/79/high",
		},
	},

	evolveFrom: {
		en: "Lugia",
		fr: "Lugia",
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
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flash of Destruction",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Discard 2 Energy attached to this Pokémon.",
		},
		damage: 150
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Flash de Destruction",
		},
		text: {
			fr: "Défaussez 2 Énergies attachées à ce Pokémon.",
		},
		damage: 150
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
