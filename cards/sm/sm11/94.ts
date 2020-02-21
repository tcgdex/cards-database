import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-94",
	localId: 94,

	// Card informations
	name: {
		en: "Doublade",
		fr: "Dimoclès",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 680,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/94/high",
		},
	},

	evolveFrom: {
		en: "Honedge",
		fr: "Monorpale",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Slashing Cutter",
			fr: "Lame Lacérante",
		},
		text: {
			en: "This attack's damage isn't affected by Weakness or Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse ou la Résistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
