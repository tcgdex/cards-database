import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-39",
	localId: 39,

	// Card informations
	name: {
		en: "Poliwrath",
		fr: "Tartard",
	},

	hp: 150,

	type: [
		Type.WATER,
	],

	dexId: 62,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/39/high",
		},
	},

	evolveFrom: {
		en: "Poliwhirl",
		fr: "Têtarte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Knuckle Punch",
			fr: "Coud’Phalange",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Swirly Rush",
			fr: "Ruée en Tourbillon",
		},
		text: {
			en: "If Poliwag and Poliwhirl are on your Bench, this attack does 90 more damage.",
			fr: "Si Ptitard et Têtarte sont sur votre Banc, cette attaque inflige 90 dégâts supplémentaires.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
