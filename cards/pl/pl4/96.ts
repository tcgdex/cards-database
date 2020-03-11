import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl4-96",
	localId: 96,

	// Card informations
	name: {
		en: "Arceus",
		fr: "Arceus",
	},

	hp: 120,

	type: [
		Type.COLORLESS,
	],

	dexId: 493,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl4/96/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl4/96/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl4/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEVELUP,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 180,
		type: AbilityType.POKEBODY,
		name: {
			en: "Multitype",
			fr: "Multi-Type",
		},
		text: {
			en: "Arceus LV.X's type is the same type as its previous Level.",
			fr: "Le type d'Arceus NIV.X est le même qu'au tour précédent.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Bolt",
			fr: "Éclair psy",
		},
		text: {
			en: "Discard a Lightning Energy and a Psychic Energy attached to Arceus.",
			fr: "Défaussez une Énergie Lightning et une Énergie Psychic attachée à Arceus.",
		},
		damage: 100
	}],





	retreat: 1,

	rarity: Rarity.RareHoloLvX,

	category: Category.POKEMON,

	set: {
		name: "Arceus",
		code: "pl4"
	}
}

export default card
