import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-27",
	localId: 27,

	// Card informations
	name: {
		en: "Empoleon FB",
		fr: "Pingoléon ",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/27/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/27/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/27/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hiroki Fuchino",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Rushing Water",
			fr: "Courant fort",
		},
		text: {
			en: "Move an Energy card attached to the Defending Pokémon to another of your opponent's Pokémon.",
			fr: "Déplacez une carte Énergie attachée au Pokémon Défenseur sur un autre des Pokémon de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Escort",
			fr: "Escorter",
		},
		text: {
			en: "If you played any Supporter card from your hand during this turn, this attack does 40 damage plus 20 more damage.",
			fr: "Si vous jouez une carte Supporter de votre main lors de ce tour, cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
