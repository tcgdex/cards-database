import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Morelull",
		fr: "Spododo",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 755,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/16/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/16/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/16/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Saya Tsuruta",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flickering Spores",
			fr: "Spores Scintillantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	},{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
