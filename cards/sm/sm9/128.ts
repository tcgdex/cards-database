import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-128",
	localId: 128,

	// Card informations
	name: {
		en: "Kangaskhan",
		fr: "Kangourex",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 115,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/128/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/128/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/128/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/128/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Fast Evolution",
			fr: "Évolution Fulgurante",
		},
		text: {
			en: "Search your deck for up to 2 Evolution Pokémon, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 Pokémon Évolutifs dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
