import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-37",
	localId: 37,

	// Card informations
	name: {
		en: "Lairon",
		fr: "Galegon",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/37/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/37/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/37/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/37/high",
		},
	},

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		cost: [
			Type.METAL,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Lairon does 20 damage to itself.",
			fr: "Galegon s'inflige 20 dégâts.",
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

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
