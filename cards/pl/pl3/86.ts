import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Togekiss C",
		fr: "Togekiss ",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 468,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/86/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/86/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kawayoo",



	attacks: [{
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Reckless Charge",
			fr: "Attaque imprudente",
		},
		text: {
			en: "Togekiss C does 10 damage to itself.",
			fr: "Togekiss  s'inflige 10 dégâts.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
