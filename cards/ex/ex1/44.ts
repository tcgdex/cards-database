import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex1-44",
	localId: 44,

	// Card informations
	name: {
		en: "Skitty",
	},

	hp: 40,

	type: [
		Type.COLORLESS,
	],

	dexId: 300,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex1/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex1/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Minor Errand-Running",
		},
		text: {
			en: "Search your deck for 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lullaby",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ruby & Sapphire",
		code: "ex1"
	}
}

export default card
