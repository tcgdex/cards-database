import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Sentret",
		fr: "Fouinette",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 161,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/80/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/80/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scout",
			fr: "Espion",
		},
		text: {
			en: "Look at your opponent's hand.",
			fr: "Regardez la main de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
