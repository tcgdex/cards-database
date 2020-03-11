import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-53",
	localId: 53,

	dexId: 647,

	// Card informations
	name: {
		en: "Keldeo V",
		fr: "Keldeo V",
	},

	hp: 210,

	type: [
		Type.WATER,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/53/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/53/low",
		}
	},

	tags: [
		Tag.BASIC,
		Tag.V,
	],

	illustrator: "PLANETA Igarashi",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Wave Splash",
			fr: "Grosse Vague",
		},
		damage: 40
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Secret Sword",
			fr: "Lame Ointe",
		},
		text: {
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Eau attachée à ce Pokémon.",
		},
		damage: "50+"
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareV,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
