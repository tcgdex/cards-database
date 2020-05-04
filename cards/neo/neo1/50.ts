import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "neo1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Sunflora",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 192,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/neo/neo1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/neo/neo1/50/high",
		},
	},

	evolveFrom: {
		en: "Sunkern",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.GRASS
		],
		name: {
			en: "Petal Dance",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. Sunflora is now Confused (after doing damage).",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Neo Genesis",
		code: "neo1"
	}
}

export default card
