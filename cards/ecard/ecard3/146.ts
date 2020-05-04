import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-146",
	localId: 146,

	// Card informations
	name: {
		en: "Charizard",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard3/146/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1295,
		type: AbilityType.POKEBODY,
		name: {
			en: "Crystal Type",
		},
		text: {
			en: "Whenever you attach a Fire, Lightning, or Fighting basic Energy card from your hand to Charizard, Charizard's type (color) becomes the same as that type of energy until the end of the turn.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Fireblast",
		},
		text: {
			en: "Discard an Energy card attached to Charizard.",
		},
		damage: 40
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Tail",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
