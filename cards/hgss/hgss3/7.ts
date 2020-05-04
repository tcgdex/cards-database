import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-7",
	localId: 7,

	// Card informations
	name: {
		en: "Scizor",
		fr: "Cizayox",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 212,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/7/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/7/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/7/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/7/high",
		},
	},

	evolveFrom: {
		en: "Scyther",
		fr: "Insecateur",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kent Kanetsuna/Direc. Shinji Higuchi",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Cut",
			fr: "Coupe",
		},
		damage: 50
	},{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe acier",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
