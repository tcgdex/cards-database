import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H32",
	localId: "H32",

	// Card informations
	name: {
		en: "Xatu",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 178,


	evolveFrom: {
		en: "Natu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",

	abilities: [{
		id: 468,
		type: AbilityType.POKEBODY,
		name: {
			en: "Synchronicity",
		},
		text: {
			en: "You may attach any Technical Machine to Xatu.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Warp Hole",
		},
		text: {
			en: "Flip a coin. If heads, choose a card from your discard pile and put it on top of your deck.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
