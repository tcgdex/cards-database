import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-37",
	localId: 37,

	// Card informations
	name: {
		en: "Simipour",
		fr: "Flotoutan",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 516,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/37/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/37/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/37/high",
		},
	},

	evolveFrom: {
		en: "Panpour",
		fr: "Flotajou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aqua Reflect",
			fr: "Reflet Aquatique",
		},
		text: {
			en: "Move a Water Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie Water de ce Pokémon vers l’un de vos Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
