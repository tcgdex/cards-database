import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-77",
	localId: 77,

	// Card informations
	name: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 231,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/77/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/77/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flail",
			fr: "Fléau",
		},
		text: {
			en: "Does 10 damage times the number of damage counters on Phanpy.",
			fr: "Inflige 10 dégâts multipliés par le nombre de marqueurs de dégâts sur Phanpy.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
