import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-15",
	localId: 15,

	// Card informations
	name: {
		en: "Starmie δ",
	},

	hp: 60,

	type: [
		Type.WATER,
		Type.METAL,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/15/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/15/high.png",
		},
	},

	evolveFrom: {
		en: "Staryu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},

	abilities: [{
		id: 39,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Metal Navigation",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for a Metal Energy card and attach it to Starmie. Shuffle your deck afterward. This power can't be used if Starmie is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Collect",
		},
		text: {
			en: "Draw 3 cards.",
		},
	},{
		cost: [
			Type.METAL
		],
		name: {
			en: "Energy Loop",
		},
		text: {
			en: "Return an Energy card attached to Starmie to your hand.",
		},
		damage: 30
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

