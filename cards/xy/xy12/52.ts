import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-52",
	localId: 52,

	// Card informations
	name: {
		en: "Mewtwo-EX",
		fr: "Mewtwo-EX",
	},

	hp: 180,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/52/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/52/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/52/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/52/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Absorption",
			fr: "Absorption d'énergie",
		},
		text: {
			en: "Attach an Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Regeneration",
			fr: "Rétablissement",
		},
		text: {
			en: "Heal 60 damage from this Pokémon.",
			fr: "Soignez 60 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psyburn",
			fr: "Brûlure Psy",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
