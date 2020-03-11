import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-50",
	localId: 50,

	dexId: 131,

	// Card informations
	name: {
		en: "Lapras VMAX",
		fr: "Lokhlass VMAX",
	},

	hp: 320,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/50/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/50/low",
		}
	},

	evolveFrom: {
		en: "Lapras V",
		fr: "Lokhlass V",
	},

	tags: [
		Tag.VMAX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {
			en: "VMAX rule",
			fr: "Règle VMAX",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "G-Max Pump",
			fr: "Pompe G-Max",
		},
		text: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RareVMAX,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
