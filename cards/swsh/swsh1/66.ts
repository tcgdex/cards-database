import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-66",
	localId: 66,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 130,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/66/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/66/low",
		}
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 40,
		name: "Hasuno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Pain-Full Punch",
			fr: "Mise au Poing",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Mach Bolt",
			fr: "Éclair Fulgurant",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
