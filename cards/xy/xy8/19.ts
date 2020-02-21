import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-19",
	localId: 19,

	// Card informations
	name: {
		en: "Quilava",
		fr: "Feurisson",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 156,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/19/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/19/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/19/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/19/high",
		},
	},

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Mini Eruption",
			fr: "Mini-Éruption",
		},
		text: {
			en: "Discard the top card of your deck. If that card is an Energy card, this attack does 30 more damage.",
			fr: "Défaussez la carte du dessus de votre deck. Si c'est une carte Énergie, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
