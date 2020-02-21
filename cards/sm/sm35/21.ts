import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-21",
	localId: 21,

	// Card informations
	name: {
		en: "Qwilfish",
		fr: "Qwilfish",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 211,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/21/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/21/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Poison Sting",
			fr: "Dard-Venin",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Shocking Sting",
			fr: "Dard Choquant",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, this attack does 50 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, cette attaque inflige 50 dégâts supplémentaires.",
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
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
