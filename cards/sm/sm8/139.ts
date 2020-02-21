import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-139",
	localId: 139,

	// Card informations
	name: {
		en: "Ralts",
		fr: "Tarsal",
	},

	hp: 50,

	type: [
		Type.FAIRY,
	],

	dexId: 280,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/139/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/139/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/139/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/139/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 45,
		name: "Yuka Morii"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Beckon",
			fr: "Invite",
		},
		text: {
			en: "Put a Supporter card from your discard pile into your hand.",
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
