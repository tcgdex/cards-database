import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-178",
	localId: 178,

	// Card informations
	name: {
		en: "Braviary",
		fr: "Gueriaigle",
	},

	hp: 130,

	type: [
		Type.COLORLESS,
	],

	dexId: 628,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/178/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/178/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/178/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/178/high",
		},
	},

	evolveFrom: {
		en: "Rufflet",
		fr: "Furaiglon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "chibi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Clutch",
			fr: "Serre",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Aero Fall",
			fr: "Chute Aérienne",
		},
		text: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
		},
		damage: 140
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
