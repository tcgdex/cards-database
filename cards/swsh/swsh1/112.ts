import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-112",
	localId: 112,

	// Card informations
	name: {
		en: "Clobbopus",
		fr: "Poulpaf",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/112/low.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/112/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/112/high.png",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/112/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 22,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Punch",
			fr: "Koud’Poing",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "undefined",
		code: "swsh1"
	}
}

export default card

