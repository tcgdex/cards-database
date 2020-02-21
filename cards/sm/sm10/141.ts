import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-141",
	localId: 141,

	// Card informations
	name: {
		en: "Spritzee",
		fr: "Fluvetin",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 682,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/141/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/141/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/141/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/141/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nap",
			fr: "Tit’Sieste",
		},
		text: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fairy Wind",
			fr: "Vent Féérique",
		},
		damage: 10
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
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
