import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-70",
	localId: 70,

	// Card informations
	name: {
		en: "Mienshao",
		fr: "Shaofouine",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 620,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/70/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/70/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/70/high",
		},
	},

	evolveFrom: {
		en: "Mienfoo",
		fr: "Kungfouine",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Feint",
			fr: "Ruse",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "High Jump Kick",
			fr: "Pied Voltige",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
