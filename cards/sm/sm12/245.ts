import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-245",
	localId: 245,

	// Card informations
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 778,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/245/low.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/245/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/245/high.png",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/245/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 70,
		name: "You Iribi"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Impersonation",
			fr: "Usurpation",
		},
		text: {
			en: "Discard a Supporter card from your hand. If you do, use the effect of that card as the effect of this attack.",
			fr: "Défaussez une carte Supporter de votre main. Dans ce cas, utilisez l’effet de cette carte en tant qu’effet de cette attaque.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Mischievous Hands",
			fr: "Mains Malicieuses",
		},
		text: {
			en: "Choose 2 of your opponent's Pokémon and put 2 damage counters on each of them.",
			fr: "Choisissez 2 des Pokémon de votre adversaire et placez 2 marqueurs de dégâts sur chacun d’eux.",
		},
	}],





	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card

