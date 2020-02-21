import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Blipbug",
		fr: "Larvadar",
	},

	hp: 50,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/16/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/16/low",
		}
	},

	evolveTo: [{
		en: "Dottler",
		fr: "Coléodôme",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 15,
		name: "nagimiso"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
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
