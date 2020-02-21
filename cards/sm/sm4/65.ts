import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-65",
	localId: 65,

	// Card informations
	name: {
		en: "Aron",
		fr: "Galekid",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 304,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/65/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/65/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 20,
		name: "TOKIYA"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 10
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 30
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
