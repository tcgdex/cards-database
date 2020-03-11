import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-1",
	localId: 1,

	// Card informations
	name: {
		en: "Arcanine",
		fr: "Arcanin",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 59,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/1/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/1/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/1/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/1/high",
		},
	},

	evolveFrom: {
		en: "Growlithe",
		fr: "Caninos",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Sharp Fang",
			fr: "Croc aiguisé",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fire Mane",
			fr: "Crinière de feu",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
