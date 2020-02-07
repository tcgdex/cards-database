import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-142",
	localId: 142,

	// Card informations
	name: {
		en: "Snorlax VMAX",
	},

	hp: 340,

	type: [
		Type.COLORLESS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/142/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/142/high.png",
		},
	},

	evolveFrom: {
		en: "Snorlax V",
	},

	tags: [
		Tag.VMAX,
	],





	attacks: [{
		name: {
			en: "VMAX rule",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "G-Max Fall",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Pokémon.",
		},
		damage: "60+"
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

