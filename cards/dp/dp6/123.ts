import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-123",
	localId: 123,

	// Card informations
	name: {
		en: "Swinub",
		fr: "Marcracrin",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 220,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/123/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/123/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/123/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/123/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 7,
		name: "Sumiyoshi Kizuki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Sniff Out",
			fr: "Flairer",
		},
		text: {
			en: "Flip a coin. If heads, put any 1 card from your discard pile into your hand.",
			fr: "Lancez une pièce. Si c'est face, placez n'importe quelle carte de votre pile de défausse dans votre main.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Lunge Out",
			fr: "Allonger",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "+10"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card

