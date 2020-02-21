import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-72",
	localId: 72,

	// Card informations
	name: {
		en: "Deino",
		fr: "Solochi",
	},

	hp: 50,

	type: [
		Type.DRAGON,
	],

	dexId: 633,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/72/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/72/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 49,
		name: "Shigenori Negishi"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS
		],
		name: {
			en: "Gnaw Off",
			fr: "Rongement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
