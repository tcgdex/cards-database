import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-128",
	localId: 128,

	// Card informations
	name: {
		en: "Meltan",
		fr: "Meltan",
	},

	hp: 70,

	type: [
		Type.METAL,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/128/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/128/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/128/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/128/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 10,
		name: "Kouki Saitou"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Steel Melt",
			fr: "Fonte d’Acier",
		},
		text: {
			en: "If your opponent's Active Pokémon is a Metal Pokémon, this attack does 40 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Metal, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card

