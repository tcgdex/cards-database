import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-18",
	localId: 18,

	// Card informations
	name: {
		en: "Vaporeon δ",
	},

	hp: 70,

	type: [
		Type.WATER,
		Type.METAL,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/18/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Delta Search",
		},
		text: {
			en: "Search your deck for a Holon Energy card and attach it to Vaporeon. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Return Wave",
		},
		text: {
			en: "You may return an Energy card attached to Vaporeon to your hand. If you do, choose an Energy card attached to the Defending Pokémon and return it to your opponent's hand.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
