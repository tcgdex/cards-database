import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-44",
	localId: 44,

	// Card informations
	name: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 710,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 105,
		name: "HiRON"
	},



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Ram",
			fr: "Collision",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Night March",
			fr: "Marche Nocturne",
		},
		text: {
			en: "This attack does 20 damage times the number of Pokémon in your discard pile that have the Night March attack.",
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre de Pokémon dans votre pile de défausse possédant l'attaque Marche Nocturne.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
