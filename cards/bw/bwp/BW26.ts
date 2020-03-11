import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW26",
	localId: "BW26",

	// Card informations
	name: {
		en: "Axew",
		fr: "Coupenotte",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 610,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Big Bite",
			fr: "Grosse Morsure",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	}],





	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
