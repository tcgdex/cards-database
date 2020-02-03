import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-10",
	localId: 10,

	// Card informations
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 672,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/10/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/10/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/10/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/10/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card

