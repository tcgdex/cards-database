import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-20",
	localId: 20,

	// Card informations
	name: {
		en: "Piloswine",
		fr: "Cochignon",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 221,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/20/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/20/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/20/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/20/high",
		},
	},

	evolveFrom: {
		en: "Swinub",
		fr: "Marcacrin",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Stampede",
			fr: "Ruée",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
			fr: "Repos",
		},
		text: {
			en: "This Pokémon is now Asleep. Heal 90 damage from it.",
			fr: "Ce Pokémon est maintenant Endormi. Soignez 90 dégâts à ce Pokémon.",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
