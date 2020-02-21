import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-16",
	localId: 16,

	// Card informations
	name: {
		en: "Team Aqua's Poochyena",
		fr: "Medhyèna de la Team Aqua",
	},

	hp: 60,

	type: [
		Type.DARKNESS,
	],

	dexId: 261,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/16/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/16/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/16/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/16/high",
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
			Type.COLORLESS
		],
		name: {
			en: "Roar",
			fr: "Hurlement",
		},
		text: {
			en: "Your opponent switches his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
			fr: "Morsure",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
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
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
