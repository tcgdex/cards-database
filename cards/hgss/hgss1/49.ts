import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/hgss/hgss1/49/low.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/49/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/49/high.png",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/49/high.png",
		},
	},

	evolveFrom: {
		en: "Cyndaquil",
		fr: "Héricendre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



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

