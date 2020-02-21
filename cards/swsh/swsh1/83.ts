import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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

	illustrator: {
		id: 17,
		name: "Taira Akitsu"
	},



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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
