import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-59",
	localId: 59,

	// Card informations
	name: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 608,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/59/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/59/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/59/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/59/high",
		},
	},

	evolveFrom: {
		en: "Litwick",
		fr: "Funécire",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Luring Light",
			fr: "Appât Lumineux",
		},
		text: {
			en: "Switch the Defending Pokémon with 1 of your opponent's Benched Pokémon.",
			fr: "Échangez le Pokémon Défenseur avec 1 des Pokémon de Banc de votre adversaire.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Will-O-Wisp",
			fr: "Feu Follet",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
