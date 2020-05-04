import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW74",
	localId: "BW74",

	// Card informations
	name: {
		en: "Giratina",
		fr: "Giratina",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 487,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW74/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW74/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hex",
			fr: "Châtiment",
		},
		text: {
			en: "If the Defending Pokémon is affected by a Special Condition, this attack does 50 more damage.",
			fr: "Si le Pokémon Défenseur est affecté par un État Spécial, cette attaque inflige 50 dégâts supplémentaires",
		},
		damage: 50
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shadow Claw",
			fr: "Griffe Ombre",
		},
		text: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
