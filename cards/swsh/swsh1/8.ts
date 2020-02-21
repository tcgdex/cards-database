import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Durant",
		fr: "Fermite",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/8/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/8/low",
		}
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Miki Tanaka"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Bite Together",
			fr: "Morsure Commune",
		},
		text: {
			en: "If Durant is on your Bench, this attack does 60 more damage.",
			fr: "Si Fermite est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: "30+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
