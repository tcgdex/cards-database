import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-5",
	localId: 5,

	// Card informations
	name: {
		en: "Flareon δ",
	},

	hp: 70,

	type: [
		Type.FIRE,
		Type.METAL,
	],

	dexId: 136,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/5/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/5/high.png",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Delta Search",
		},
		text: {
			en: "Search your deck for a Holon Energy card and attach it to Flareon. Shuffle your deck afterward.",
		},
		damage: 10
	},{
		name: {
			en: "Return Burn",
		},
		text: {
			en: "You may return an Energy card attached to Flareon to your hand. If you do, the Defending Pokémon is now Burned.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
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

