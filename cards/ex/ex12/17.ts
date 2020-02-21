import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-17",
	localId: 17,

	// Card informations
	name: {
		en: "Gorebyss",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 368,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/17/high",
		},
	},

	evolveFrom: {
		en: "Clamperl",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},

	abilities: [{
		id: 226,
		type: AbilityType.POKEBODY,
		name: {
			en: "Reactive Booster",
		},
		text: {
			en: "Each React Energy card attached to all of your Huntail and Gorebyss provides 2 Energy of every type but has no effect other than providing Energy.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
		},
		text: {
			en: "Does 30 damage plus 20 more damage for each Water Energy attached to Gorebyss but not used to pay for this attack's Energy cost. You can't add more than 40 damage in this way.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
