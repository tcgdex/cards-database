import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-44",
	localId: 44,

	// Card informations
	name: {
		en: "Sableye",
		fr: "Ténéfix",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
	],

	dexId: 302,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/44/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/44/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 67,
		name: "Hitoshi Ariga"
	},



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Bewitching Eyes",
			fr: "Yeux Ensorcelants",
		},
		text: {
			en: "Choose a Supporter card from your opponent's discard pile and use it as the effect of this attack.",
			fr: "Choisissez une carte Supporter de la pile de défausse de votre adversaire et utilisez-la en tant qu'effet de cette attaque.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Furtive Drop",
			fr: "Chute Furtive",
		},
		text: {
			en: "Put 3 damage counters on your opponent's Active Pokémon.",
			fr: "Placez 3 marqueurs de dégâts sur le Pokémon Actif de votre adversaire.",
		},
	}],





	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
