import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-4",
	localId: 4,

	// Card informations
	name: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 540,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/4/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/4/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/4/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Leaf",
			fr: "Tranch'Herbe",
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
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
