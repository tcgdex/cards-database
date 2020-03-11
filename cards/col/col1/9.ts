import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Ho-Oh",
		fr: "Ho-Oh",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/9/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/9/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Combustion",
			fr: "Fournaise",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Scorching Wing",
			fr: "Aile brûlante",
		},
		text: {
			en: "Flip a coin. If tails, discard all Fire Energy attached to Ho-Oh.",
			fr: "Lancez une pièce. Si c’est pile, défaussez toutes les Énergies Fire attachées à Ho-Oh.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
