import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "gym1-24",
	localId: 24,

	// Card informations
	name: {
		en: "Brock's Zubat",
	},

	hp: 30,

	type: [
		Type.GRASS,
	],

	dexId: 41,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/gym/gym1/24/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/gym/gym1/24/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Alert",
		},
		text: {
			en: "Draw a card. Then, switch Brock's Zubat with 1 of your Benched Pokémon. You can't use this attack if your Bench is empty.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wing Attack",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Gym Heroes",
		code: "gym1"
	}
}

export default card
