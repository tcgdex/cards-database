import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-51",
	localId: 51,

	// Card informations
	name: {
		en: "Carvanha",
	},

	hp: 40,

	type: [
		Type.WATER,
	],

	dexId: 318,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 30,
		name: "Hajime Kusajima"
	},

	abilities: [{
		id: 227,
		type: AbilityType.POKEBODY,
		name: {
			en: "Rough Skin",
		},
		text: {
			en: "If Carvanha is your Active Pokémon and is damaged by an opponent's attack (even if Carvanha is Knocked Out), put 1 damage counter on the Attacking Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
		},
		text: {
			en: "The Defending Pokémon can't retreat until the end of your opponent's next turn.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
