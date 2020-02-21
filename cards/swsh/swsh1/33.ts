import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-33",
	localId: 33,

	// Card informations
	name: {
		en: "Raboot",
		fr: "Lapyro",
	},

	hp: 90,

	type: [
		Type.FIRE,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/33/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/33/low",
		}
	},

	evolveFrom: {
		en: "Scorbunny",
		fr: "Flambino",
	},

	evolveTo: [{
		en: "Cinderace",
		fr: "Pyrobut",
	}],

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 22,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Kick",
			fr: "Koud’Pied",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
