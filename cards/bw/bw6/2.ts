import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-2",
	localId: 2,

	// Card informations
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 188,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/2/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/2/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/2/high",
		},
	},

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Bullet Seed",
			fr: "Balle Graine",
		},
		text: {
			en: "Flip 4 coins. This attack does 10 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.WATER,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
