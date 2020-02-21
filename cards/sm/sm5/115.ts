import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-115",
	localId: 115,

	// Card informations
	name: {
		en: "Type: Null",
		fr: "Type:0",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 772,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 28,
		name: "match"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Merciless Strike",
			fr: "Impact Impitoyable",
		},
		text: {
			en: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 30 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a déjà des marqueurs de dégâts, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Headbang",
			fr: "Frappe de Tête",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
