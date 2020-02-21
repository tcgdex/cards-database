import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-27",
	localId: 27,

	// Card informations
	name: {
		en: "Turtonator",
		fr: "Boumata",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 776,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 50,
		name: "Anesaki Dynamic"
	},



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Searing Flame",
			fr: "Flammes Calcinantes",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Steam Artillery",
			fr: "Artillerie Vapeur",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
