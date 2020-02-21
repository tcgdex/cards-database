import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-95",
	localId: 95,

	// Card informations
	name: {
		en: "Magcargo ex",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/95/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/95/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
	},

	tags: [
		Tag.EX,
	],

	illustrator: {
		id: 74,
		name: "Hikaru Koike"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Melting Mountain",
		},
		text: {
			en: "Discard the top card from your deck. If that card is a basic Energy card, attach it to Magcargo ex.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Lava Flow",
		},
		text: {
			en: "You may discard any number of basic Energy cards attached to Magcargo ex when you use this attack. If you do, this attack does 40 damage plus 20 more damage for each basic Energy card you discarded.",
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
		name: "Dragon",
		code: "ex3"
	}
}

export default card
