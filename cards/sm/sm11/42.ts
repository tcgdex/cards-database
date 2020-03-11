import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-42",
	localId: 42,

	// Card informations
	name: {
		en: "Abomasnow",
		fr: "Blizzaroi",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 460,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/42/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/42/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/42/high",
		},
	},

	evolveFrom: {
		en: "Snover",
		fr: "Blizzi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Quick Freeze",
			fr: "Gel Rapide",
		},
		text: {
			en: "If your opponent's Active Pokémon has any Water Energy attached to it, it is now Paralyzed.",
			fr: "Si de l’Énergie Water est attachée au Pokémon Actif de votre adversaire, ce Pokémon est maintenant Paralysé.",
		},
		damage: 70
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal",
		},
		text: {
			en: "This Pokémon does 20 damage to itself.",
			fr: "Ce Pokémon s’inflige 20 dégâts.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
