import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-99",
	localId: 99,

	// Card informations
	name: {
		en: "Regirock ex",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 377,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/99/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mend",
		},
		text: {
			en: "Search your discard pile for a Fighting Energy card and attach it to Regirock ex. If you do, remove 1 damage counter from Regirock ex.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Metal Crush",
		},
		text: {
			en: "If Registeel ex is in play, this attack does 40 damage plus 20 more damage.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
