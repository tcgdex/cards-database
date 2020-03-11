import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-116",
	localId: 116,

	// Card informations
	name: {
		en: "Whismur",
		fr: "Chuchmur",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 293,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/116/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/116/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/116/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/116/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bawl",
			fr: "Sanglots",
		},
		text: {
			en: "You can use this attack only if you go second, and only on your first turn. Your opponent can't play any Trainer cards from their hand during their next turn.",
			fr: "Vous ne pouvez utiliser cette attaque que si vous jouez en second et uniquement pendant votre premier tour. Votre adversaire ne peut pas jouer de carte Dresseur de sa main pendant son prochain tour.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras’Face",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
