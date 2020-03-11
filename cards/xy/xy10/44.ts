import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-44",
	localId: 44,

	// Card informations
	name: {
		en: "Wormadam",
		fr: "Cheniselle",
	},

	hp: 110,

	type: [
		Type.FIGHTING,
	],

	dexId: 413,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/44/high",
		},
	},

	evolveFrom: {
		en: "Burmy",
		fr: "Cheniti",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hajime Kusajima",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sand Spray",
			fr: "Jet Sableux",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Twin Bursts",
			fr: "Explosions en Duo",
		},
		text: {
			en: "If Mothim is on your Bench, this attack does 60 more damage.",
			fr: "Si Papilord est sur votre Banc, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
