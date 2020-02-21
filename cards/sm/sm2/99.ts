import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-99",
	localId: 99,

	// Card informations
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 783,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/99/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/99/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/99/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/99/high",
		},
	},

	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
