import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-158",
	localId: 158,

	// Card informations
	name: {
		en: "Noibat",
		fr: "Sonistrelle",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 714,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/158/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/158/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/158/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/158/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 112,
		name: "0313"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS
		],
		name: {
			en: "Air Slash",
			fr: "Lame d’Air",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

