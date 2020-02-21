import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-28",
	localId: 28,

	// Card informations
	name: {
		en: "Rapidash",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 78,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/28/high",
		},
	},

	evolveFrom: {
		en: "Ponyta",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 104,
		name: "Lee HyunJung"
	},

	abilities: [{
		id: 882,
		type: AbilityType.POKEBODY,
		name: {
			en: "Wild Guard",
		},
		text: {
			en: "Prevent all effects of attacks, including damage, done to Rapidash by your opponent's Pokémon SP.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Fire Mane",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rising Lunge",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 50 damage plus 20 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],





	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
