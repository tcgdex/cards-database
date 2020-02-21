import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-2",
	localId: 2,

	// Card informations
	name: {
		en: "Altaria",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 334,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/2/high",
		},
	},

	evolveFrom: {
		en: "Swablu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},

	abilities: [{
		id: 3,
		type: AbilityType.POKEBODY,
		name: {
			en: "Synergy Effect",
		},
		text: {
			en: "If Drake's Stadium is in play, remove 1 damage counter from Altaria between turns.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surprise",
		},
		text: {
			en: "Choose 1 card from your opponent's hand without looking. Look at the card you chose, then have your opponent shuffle that card into his or her deck.",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Gust",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
