import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-12",
	localId: 12,

	// Card informations
	name: {
		en: "Chimecho",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/12/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
		},
		text: {
			en: "Draw a card.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Warp Sounds",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, the Defending Pokémon is now Confused.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
