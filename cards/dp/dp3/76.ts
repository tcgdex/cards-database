import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-76",
	localId: 76,

	// Card informations
	name: {
		en: "Bagon",
		fr: "Draby",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 371,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/76/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/76/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/76/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rage",
			fr: "Frénésie",
		},
		text: {
			en: "Does 10 damage plus 10 more damage for each damage counter on Bagon.",
			fr: "Inflige 10 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Draby.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "+10"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
