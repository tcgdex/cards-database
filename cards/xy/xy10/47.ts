import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-47",
	localId: 47,

	// Card informations
	name: {
		en: "Lucario",
		fr: "Lucario",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 448,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/47/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/47/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/47/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/47/high",
		},
	},

	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
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
			Type.FIGHTING
		],
		name: {
			en: "Beatdown",
			fr: "Dérouillée",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Kick",
			fr: "Coup d'Pied Magnum",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
