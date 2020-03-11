import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-5",
	localId: 5,

	// Card informations
	name: {
		en: "Chesnaught",
		fr: "Blindépique",
	},

	hp: 150,

	type: [
		Type.GRASS,
	],

	dexId: 652,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/5/high",
		},
	},

	evolveFrom: {
		en: "Quilladin",
		fr: "Boguérisse",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Needle Arm",
			fr: "Poing Dard",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 40 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
