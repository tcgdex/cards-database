import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-228",
	localId: 228,

	// Card informations
	name: {
		en: "Celesteela-GX",
	},

	hp: 200,

	type: [
		Type.COLORLESS,
	],

	dexId: 797,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/228/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/228/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Igarashi",

	abilities: [{
		id: 520,
		type: AbilityType.TALENT,
		name: {
			en: "Force Canceler",
		},
		text: {
			en: "As long as this Pokémon is your Active Pokémon, prevent all effects of your opponent's GX attacks, including damage, done to your Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Power Cyclone",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
		},
		damage: 110
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Discovery-GX",
		},
		text: {
			en: "Count your Prize cards and put them into your hand. Then, take that many cards from the top of your deck and put them face down as your Prize cards. If you don't have that many cards in your deck, this attack does nothing. (You can't use more than 1 GX attack in a game.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
