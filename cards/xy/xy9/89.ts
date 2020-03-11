import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

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

	illustrator: "5ban Graphics",



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
