import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-18",
	localId: 18,

	// Card informations
	name: {
		en: "Bounsweet",
		fr: "Croquine",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 761,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/18/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/18/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/18/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/18/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 48,
		name: "Akira Komayama"
	},



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Sweet Scent",
			fr: "Doux Parfum",
		},
		text: {
			en: "Heal 30 damage from 1 of your Pokémon.",
			fr: "Soignez 30 dégâts à l’un de vos Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Splash",
			fr: "Trempette",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card

