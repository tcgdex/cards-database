import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-43",
	localId: 43,

	// Card informations
	name: {
		en: "Chimecho",
		fr: "Éoko",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 358,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/43/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/43/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/43/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Bell of Silence",
			fr: "Cloche du Silence",
		},
		text: {
			en: "Your opponent can't play any Pokémon that has an Ability from their hand during their next turn.",
			fr: "Votre adversaire ne peut pas jouer de Pokémon ayant un talent de sa main pendant son prochain tour.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
