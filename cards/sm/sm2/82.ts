import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-82",
	localId: 82,

	// Card informations
	name: {
		en: "Pangoro",
		fr: "Pandarbare",
	},

	hp: 130,

	type: [
		Type.DARKNESS,
	],

	dexId: 675,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/82/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/82/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/82/high",
		},
	},

	evolveFrom: {
		en: "Pancham",
		fr: "Pandespiègle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sky Uppercut",
			fr: "Stratopercut",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 70
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
