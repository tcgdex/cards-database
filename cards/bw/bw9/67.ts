import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-67",
	localId: 67,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/67/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/67/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/67/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/67/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Mind Jack",
			fr: "Emprise Mentale",
		},
		text: {
			en: "Does 20 more damage for each of your opponent's Benched Pokémon.",
			fr: "Inflige 20 dégâts supplémentaires pour chaque Pokémon de Banc de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fearsome Shadow",
			fr: "Ombre Redoutable",
		},
		text: {
			en: "Your opponent reveals his or her hand.",
			fr: "Votre adversaire montre sa main.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
