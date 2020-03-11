import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-92",
	localId: 92,

	// Card informations
	name: {
		en: "Morelull",
		fr: "Spododo",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 755,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



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
			Type.FAIRY
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
