import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-90",
	localId: 90,

	// Card informations
	name: {
		en: "Polteageist",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/90/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/90/high.png",
		},
	},

	evolveFrom: {
		en: "Sinistea",
	},

	tags: [
		Tag.STAGE1,
	],





	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teatime",
		},
		text: {
			en: "Each player draws 2 cards.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Poltergeist",
		},
		text: {
			en: "Your opponent reveals their hand. This attack does 50 damage for each Trainer card you find there.",
		},
		damage: "50×"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card

