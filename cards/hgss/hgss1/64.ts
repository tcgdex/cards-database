import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-64",
	localId: 64,

	// Card informations
	name: {
		en: "Girafarig",
		fr: "Girafarig",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/64/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/64/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Show Off",
			fr: "Crâneur",
		},
		text: {
			en: "Search your deck for up to 2 basic Energy cards, show them to your opponent, and put them into your hand. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu’à deux cartes Énergie de base, montrez-les à votre adversaire et ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyshot",
			fr: "Piqûre psy",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
