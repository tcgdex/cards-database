import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy3-15",
	localId: 15,

	// Card informations
	name: {
		en: "Poliwag",
		fr: "Ptitard",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 60,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy3/15/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/15/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy3/15/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy3/15/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 46,
		name: "MAHOU"
	},



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Current",
			fr: "Courant Tourbillonnant",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused. That Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus. Ce dernier ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Furious Fists",
		code: "xy3"
	}
}

export default card
