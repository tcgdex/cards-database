import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-57",
	localId: 57,

	// Card informations
	name: {
		en: "Whirlipede",
		fr: "Scobolide",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 544,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/57/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/57/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/57/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/57/high",
		},
	},

	evolveFrom: {
		en: "Venipede",
		fr: "Venipatte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 102,
		name: "SATOSHI NAKAI"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Spin Turn",
			fr: "Tournoyer",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Rollout",
			fr: "Roulade",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
