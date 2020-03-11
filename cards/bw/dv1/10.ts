import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dv1-10",
	localId: 10,

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 100,

	type: [
		Type.DRAGON,
	],

	dexId: 381,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/dv1/10/low",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/10/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/dv1/10/high",
			fr: "https://assets.tcgdex.net/fr/bw/dv1/10/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Sky Blade",
			fr: "Lame Céleste",
		},
		text: {
			en: "If Latias is on your Bench, this attack does 20 more damage.",
			fr: "Si Latias est sur votre Banc, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Wing",
			fr: "Ailes Vives",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Dragon Vault",
		code: "dv1"
	}
}

export default card
