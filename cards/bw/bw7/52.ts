import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-52",
	localId: 52,

	// Card informations
	name: {
		en: "Electrode",
		fr: "Électrode",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 101,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/52/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/52/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/52/high",
		},
	},

	evolveFrom: {
		en: "Voltorb",
		fr: "Voltorbe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Static Shock",
			fr: "Choc Statique",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electro Ball",
			fr: "Boule Élek",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
