import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-46",
	localId: 46,

	// Card informations
	name: {
		en: "Drifloon",
		fr: "Baudrive",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 425,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/46/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/46/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/46/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kodama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Transfer Pain",
			fr: "Transfert de Douleur",
		},
		text: {
			en: "Move 1 damage counter from 1 of your Pokémon to 1 of your opponent's Pokémon.",
			fr: "Déplacez 1 marqueur de dégâts de l’un de vos Pokémon vers l’un des Pokémon de votre adversaire.",
		},
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
