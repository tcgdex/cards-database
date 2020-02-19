import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-116",
	localId: 116,

	// Card informations
	name: {
		en: "Riolu",
		fr: "Riolu",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 447,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/116/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/116/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/116/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/116/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 164,
		name: "AKIRA EGAWA"
	},



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Kick",
			fr: "Koud’Pied",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card

