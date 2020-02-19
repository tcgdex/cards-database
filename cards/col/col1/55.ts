import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/col/col1/55/low.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/55/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/55/high.png",
			fr: "https://assets.tcgdex.net/fr/col/col1/55/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 5,
		name: "Ken Sugimori"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card

