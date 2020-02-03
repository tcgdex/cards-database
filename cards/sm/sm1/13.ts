import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Grubbin",
		fr: "Larvibule",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 736,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/13/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/13/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/13/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/13/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Vice Grip",
			fr: "Force Poigne",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

