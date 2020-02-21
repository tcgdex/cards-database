import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-70",
	localId: 70,

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/70/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/70/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 62,
		name: "Saya Tsuruta"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Punch",
			fr: "Koud’Poing",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Low Kick",
			fr: "Balayage",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
