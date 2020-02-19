import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-100",
	localId: 100,

	// Card informations
	name: {
		en: "Zygarde",
		fr: "Zygarde",
	},

	hp: 150,

	type: [
		Type.DRAGON,
	],

	dexId: 718,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/100/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/100/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/100/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/100/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Land Crush",
			fr: "Écras’Terre",
		},
		damage: 80
	},{
		cost: [
			Type.DARKNESS,
			Type.FAIRY,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Core Enforcer",
			fr: "Sanction Suprême",
		},
		text: {
			en: "Discard a Darkness Energy and a Fairy Energy from this Pokémon.",
			fr: "Défaussez une Énergie Darkness et une Énergie Fairy de ce Pokémon.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card

