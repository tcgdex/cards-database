import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-32",
	localId: 32,

	// Card informations
	name: {
		en: "Stantler",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 234,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/32/high",
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
			en: "Screechy Voice",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Push Away",
		},
		text: {
			en: "Look at your opponent's hand, choose a Trainer card you find there, and discard it.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
