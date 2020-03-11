import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-107",
	localId: 107,

	// Card informations
	name: {
		en: "Poipole",
		fr: "Vémini",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 803,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Eye Opener",
			fr: "Ouvrir les Yeux",
		},
		text: {
			en: "Look at your face-down Prize cards.",
			fr: "Regardez vos cartes Récompense (actuellement face cachée).",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Peck",
			fr: "Picpic",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
