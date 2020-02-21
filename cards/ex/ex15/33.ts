import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-33",
	localId: 33,

	// Card informations
	name: {
		en: "Kirlia δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/33/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 25,
		name: "Kyoko Umemoto"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flickering Flames",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Smack",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
