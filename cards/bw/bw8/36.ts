import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-36",
	localId: 36,

	// Card informations
	name: {
		en: "Vanillish",
		fr: "Sorboul",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 583,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/36/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/36/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/36/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/36/high",
		},
	},

	evolveFrom: {
		en: "Vanillite",
		fr: "Sorbébé",
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
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Icy Snow",
			fr: "Verglas",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
