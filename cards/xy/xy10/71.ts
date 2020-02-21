import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-71",
	localId: 71,

	// Card informations
	name: {
		en: "Whimsicott",
		fr: "Farfaduvet",
	},

	hp: 90,

	type: [
		Type.FAIRY,
	],

	dexId: 547,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/71/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/71/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/71/high",
		},
	},

	evolveFrom: {
		en: "Cottonee",
		fr: "Doudouvet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 24,
		name: "sui"
	},



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Light Steps",
			fr: "Pas Légers",
		},
		text: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],



	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
