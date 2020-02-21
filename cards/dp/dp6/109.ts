import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-109",
	localId: 109,

	// Card informations
	name: {
		en: "Nosepass",
		fr: "Tarinor",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 299,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/109/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/109/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/109/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/109/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
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
			en: "Sharpen",
			fr: "Affûtage",
		},
		damage: 10
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Nose Poke",
			fr: "Coup d'nez",
		},
		text: {
			en: "If Probopass is on your Bench, this attack does 20 damage plus 20 more damage.",
			fr: "Si Tarinorme se trouve sur votre Banc, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
