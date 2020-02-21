import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-76",
	localId: 76,

	// Card informations
	name: {
		en: "Paras",
		fr: "Paras",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 46,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/76/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/76/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/76/high",
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
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Double-edge Claw",
			fr: "Griffe Damoclès",
		},
		text: {
			en: "Paras does 10 damage to itself.",
			fr: "Paras s’inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
