import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-134",
	localId: 134,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 120,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/134/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/134/low",
		}
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Charge Order",
			fr: "Ordre de Charge",
		},
		text: {
			en: "This attack does 30 more damage for each of your Benched Pawniard.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Scalpion sur votre Banc.",
		},
		damage: "30+"
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Slicing Blade",
			fr: "Lame Tranchante",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
