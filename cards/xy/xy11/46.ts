import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/xy/xy11/46/low.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/46/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/46/high.png",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/46/high.png",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 36,
		name: "kodama"
	},



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

