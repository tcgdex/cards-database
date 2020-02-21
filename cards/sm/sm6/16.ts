import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-16",
	localId: 16,

	// Card informations
	name: {
		en: "Braixen",
		fr: "Roussil",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],

	dexId: 654,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/16/high",
		},
	},

	evolveFrom: {
		en: "Fennekin",
		fr: "Feunnec",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Flare",
			fr: "Flamboiement",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-Flammes",
		},
		text: {
			en: "Discard an Energy from this Pokémon.",
			fr: "Défaussez une Énergie de ce Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
