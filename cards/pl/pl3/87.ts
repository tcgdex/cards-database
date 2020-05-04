import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-87",
	localId: 87,

	// Card informations
	name: {
		en: "Wailmer",
		fr: "Wailmer",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 320,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/87/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/87/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/87/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/87/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Water Energy attached to Wailmer but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
			fr: "Inflige 20 dégâts plus 10 dégâts supplémentaires pour chaque Énergie Water attachée à Wailmer qui n'a pas été utilisée pour payer le Coût en Énergie de cette attaque. Vous ne pouvez pas ajouter plus de 20 dégâts de cette façon.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "Wailmer does 20 damage to itself.",
			fr: "Wailmer s'inflige 20 dégâts.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
