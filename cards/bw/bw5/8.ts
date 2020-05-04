import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw5-8",
	localId: 8,

	// Card informations
	name: {
		en: "Crustle",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 558,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw5/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw5/8/high",
		},
	},

	evolveFrom: {
		en: "Dwebble",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Bullet",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dark Explorers",
		code: "bw5"
	}
}

export default card
