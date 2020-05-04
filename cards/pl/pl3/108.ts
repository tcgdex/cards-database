import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "Atsuko Nishida",



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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
