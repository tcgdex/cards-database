import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-80",
	localId: 80,

	// Card informations
	name: {
		en: "Lillipup",
		fr: "Ponchiot",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 506,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/80/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/80/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/80/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/80/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pickup",
			fr: "Ramassage",
		},
		text: {
			en: "Put an Item card from your discard pile into your hand.",
			fr: "Prenez une carte Objet dans votre pile de défausse et ajoutez-la à votre main.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
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
		name: "Black & White",
		code: "bw1"
	}
}

export default card

