import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-89",
	localId: 89,

	// Card informations
	name: {
		en: "Raticate BREAK",
		fr: "Rattatac TURBO",
	},

	hp: 110,

	type: [
		Type.COLORLESS,
	],

	dexId: 20,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/89/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/89/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/89/high",
		},
	},

	evolveFrom: {
		en: "Raticate",
		fr: "Rattatac",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Super Fang",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Croc Fatal",
		},
		text: {
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ait 10 PV.",
		},
	}],







	rarity: Rarity.RareBREAK,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
