import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "col1-55",
	localId: 55,

	// Card informations
	name: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	hp: 40,

	type: [
		Type.FIRE,
	],

	dexId: 155,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/55/low",
			fr: "https://assets.tcgdex.net/fr/col/col1/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/55/high",
			fr: "https://assets.tcgdex.net/fr/col/col1/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fireworks",
			fr: "Feux d'artifice",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Cyndaquil.",
			fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire attachée à Héricendre.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
