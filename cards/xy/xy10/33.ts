import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-33",
	localId: 33,

	// Card informations
	name: {
		en: "Solosis",
		fr: "Nucléos",
	},

	hp: 30,

	type: [
		Type.PSYCHIC,
	],

	dexId: 577,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/33/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/33/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/33/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/33/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Mini Link",
			fr: "Mini Lien",
		},
		text: {
			en: "If Solosis is on your Bench, this attack does 30 more damage.",
			fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card

