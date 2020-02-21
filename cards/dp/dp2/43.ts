import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-43",
	localId: 43,

	// Card informations
	name: {
		en: "Cranidos",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 408,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/43/high",
		},
	},

	evolveFrom: {
		en: "Skull Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Steamroll",
		},
		text: {
			en: "Does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
