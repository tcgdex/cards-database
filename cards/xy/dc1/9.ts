import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-9",
	localId: 9,

	// Card informations
	name: {
		en: "Team Aqua's Seviper",
		fr: "Séviper de la Team Aqua",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 336,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/9/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/9/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Poisoned.",
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Empoisonné.",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Venom Tail",
			fr: "Queue Venimeuse",
		},
		text: {
			en: "If your opponent's Active Pokémon is affected by a Special Condition, discard an Energy attached to that Pokémon.",
			fr: "Si le Pokémon Actif de votre adversaire est affecté par un État Spécial, défaussez une Énergie lui étant attachée.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
