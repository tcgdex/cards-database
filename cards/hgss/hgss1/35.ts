import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-35",
	localId: 35,

	// Card informations
	name: {
		en: "Bayleef",
		fr: "Macronium",
	},

	hp: 90,

	type: [
		Type.GRASS,
	],

	dexId: 153,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/35/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/35/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/35/high",
		},
	},

	evolveFrom: {
		en: "Chikorita",
		fr: "Germignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncer",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch’herbe",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
