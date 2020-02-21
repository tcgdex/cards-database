import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "col1-67",
	localId: 67,

	// Card informations
	name: {
		en: "Pidgey",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 16,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/col/col1/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/col/col1/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Messenger",
		},
		text: {
			en: "Search your deck for a Pokémon, show it to your opponent, and put it into your hand. Shuffle Pidgey and all cards attached to it back into your deck.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Glide",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Call of Legends",
		code: "col1"
	}
}

export default card
