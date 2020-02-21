import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Skiddo",
		fr: "Cabriolaine",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 672,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lead",
			fr: "Mentor",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Supporter card, reveal it, and put it into your hand. Shuffle your deck afterward.",
			fr: "Lancez une pièce. Si c'est face, cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
