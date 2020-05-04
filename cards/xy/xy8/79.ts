import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-79",
	localId: 79,

	// Card informations
	name: {
		en: "Marowak BREAK",
		fr: "Ossatueur TURBO",
	},

	hp: 140,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/79/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/79/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/79/high",
		},
	},

	evolveFrom: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	tags: [
		Tag.BREAK,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Bone Revenge",
			fr: "Règle des Évolutions TURBO",
		},
		text: {
			en: "This attack does 40 more damage for each Prize card your opponent has taken.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			fr: "Os Vengeance",
		},
		text: {
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée.",
		},
		damage: "20+"
	}],







	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
