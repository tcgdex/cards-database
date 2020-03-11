import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-72",
	localId: 72,

	// Card informations
	name: {
		en: "Honchkrow",
		fr: "Corboss",
	},

	hp: 110,

	type: [
		Type.DARKNESS,
	],

	dexId: 430,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/72/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/72/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/72/high",
		},
	},

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.DARKNESS
		],
		name: {
			en: "Rip and Run",
			fr: "Échapée Belle",
		},
		text: {
			en: "Discard a random card from your opponent's hand. Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire. Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Speed Dive",
			fr: "Plongée Rapide",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
