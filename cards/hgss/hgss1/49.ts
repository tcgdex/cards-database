import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-49",
	localId: 49,

	// Card informations
	name: {
		en: "Quilava",
		fr: "Fleurisson",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 156,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/49/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/49/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/49/high",
		},
	},

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Flare",
			fr: "Intimidation",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Flamethrower",
			fr: "Lance-flamme",
		},
		text: {
			en: "Discard an Energy attached to Quilava.",
			fr: "Défaussez-vous d’une carte Énergie attachée à Fleurisson.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
