import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-108",
	localId: 108,

	// Card informations
	name: {
		en: "Growlithe",
		fr: "Caninos",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 58,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/108/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/108/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/108/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/108/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 32,
		name: "Atsuko Nishida"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smash Kick",
			fr: "Coud'pattes",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fireworks",
			fr: "Feux d'artifices",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to Growlithe.",
			fr: "Lancez une pièce. Si c'est pile, défaussez une Énergie Fire attachée à Caninos.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
