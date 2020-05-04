import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-34",
	localId: 34,

	// Card informations
	name: {
		en: "Duosion",
		fr: "Méios",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 578,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/34/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/34/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/34/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/34/high",
		},
	},

	evolveFrom: {
		en: "Solosis",
		fr: "Nucléos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Double Link",
			fr: "Double Lien",
		},
		text: {
			en: "If Solosis is on your Bench, this attack does 30 more damage. If Duosion is on your Bench, this attack does 60 more damage.",
			fr: "Si Nucléos est sur votre Banc, cette attaque inflige 30 dégâts supplémentaires. Si Méios est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
