import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-96",
	localId: 96,

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
			en: "https://assets.tcgdex.net/en/sm/sm12/96/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/96/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/96/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/96/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HYOGONOSUKE",



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

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
