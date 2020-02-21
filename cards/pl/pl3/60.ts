import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-60",
	localId: 60,

	// Card informations
	name: {
		en: "Garchomp C",
		fr: "Carchacrok ",
	},

	hp: 80,

	type: [
		Type.COLORLESS,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/60/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/60/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/60/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/60/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Claw Swipe",
			fr: "Combo-serres",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
