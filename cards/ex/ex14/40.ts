import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-40",
	localId: 40,

	// Card informations
	name: {
		en: "Shuppet",
	},

	hp: 40,

	type: [
		Type.PSYCHIC,
	],

	dexId: 353,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/40/high",
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
			en: "Ascension",
		},
		text: {
			en: "Search your deck for a card that evolves from Shuppet and put it onto Shuppet. (This counts as evolving Shuppet.) Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
