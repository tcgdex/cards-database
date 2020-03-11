import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base5-21",
	localId: 21,

	// Card informations
	name: {
		en: "Dark Charizard",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/21/high",
		},
	},

	evolveFrom: {
		en: "Charmeleon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Nail Flick",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Continuous Fireball",
		},
		text: {
			en: "Flip a number of coins equal to the number of Energy cards attached to Dark Charizard. This attack does 50 damage times the number of heads. Discard a number of Energy cards attached to Dark Charizard equal to the number of heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
