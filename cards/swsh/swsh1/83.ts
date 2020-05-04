import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-83",
	localId: 83,

	// Card informations
	name: {
		en: "Gastly",
		fr: "Fantominus",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/83/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/83/low",
		}
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Taira Akitsu",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Fade Out",
			fr: "Faiblir",
		},
		text: {
			en: "Put this Pokémon and all attached cards into your hand.",
			fr: "Ajoutez à votre main ce Pokémon et toutes les cartes attachées.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
