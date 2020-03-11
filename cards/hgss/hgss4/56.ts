import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-56",
	localId: 56,

	// Card informations
	name: {
		en: "Aron",
		fr: "Galekid",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/56/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/56/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/56/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/56/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mountain Eater",
			fr: "Mange-montagne",
		},
		text: {
			en: "Discard the top card of your deck. Then, remove 2 damage counters from Aron.",
			fr: "Défaussez la carte du dessus de votre deck. Ensuite, retirez 2 marqueurs de dégât à Galekid.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Confront",
			fr: "Confrontation",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
