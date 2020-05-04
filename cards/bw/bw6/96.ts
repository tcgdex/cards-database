import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-96",
	localId: 96,

	// Card informations
	name: {
		en: "Zweilous",
		fr: "Diamat",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 634,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/96/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/96/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/96/high",
		},
	},

	evolveFrom: {
		en: "Deino",
		fr: "Solochi",
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
			en: "Draw In",
			fr: "Aspiracartes",
		},
		text: {
			en: "Attach 2 Darkness Energy cards from your discard pile to this Pokémon.",
			fr: "Attachez 2 cartes Énergie Darkness de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Headbutt",
			fr: "Dracoud'Boule",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
