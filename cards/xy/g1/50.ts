import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "g1-50",
	localId: 50,

	// Card informations
	name: {
		en: "Clefairy",
		fr: "Mélofée",
	},

	hp: 60,

	type: [
		Type.FAIRY,
	],

	dexId: 35,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/50/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/50/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 132,
		name: "Shibuzoh."
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Moonlight",
			fr: "Rayon Lune",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Pound",
			fr: "Écras'Face",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
