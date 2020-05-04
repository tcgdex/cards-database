import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Trumbeak",
		fr: "Piclairon",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 732,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/107/high",
		},
	},

	evolveFrom: {
		en: "Pikipek",
		fr: "Picassaut",
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
			en: "Bullet Seed",
			fr: "Balle Graine",
		},
		text: {
			en: "Flip 4 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
