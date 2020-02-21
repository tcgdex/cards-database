import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-4",
	localId: 4,

	// Card informations
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 188,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/4/high",
		},
	},

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
