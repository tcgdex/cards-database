import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-138",
	localId: 138,

	// Card informations
	name: {
		en: "Scrafty",
		fr: "Baggaïd",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 560,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/138/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/138/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/138/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/138/high",
		},
	},

	evolveFrom: {
		en: "Scraggy",
		fr: "Baggiguane",
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
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Turf Raid",
			fr: "Raid Territorial",
		},
		text: {
			en: "This attack does 20 more damage for each of your remaining Prize cards.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chacune des cartes Récompense qu’il vous reste.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
