import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "det1-3",
	localId: 3,

	// Card informations
	name: {
		en: "Morelull",
		fr: "Spododo",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	dexId: 755,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/det1/3/low",
			fr: "https://assets.tcgdex.net/fr/sm/det1/3/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/det1/3/high",
			fr: "https://assets.tcgdex.net/fr/sm/det1/3/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],





	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sleep Spore",
			fr: "Spore Dodo",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Detective Pikachu",
		code: "det1"
	}
}

export default card
