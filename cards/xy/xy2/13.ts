import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy2-13",
	localId: 13,

	// Card informations
	name: {
		en: "M Charizard-EX",
		fr: "M Dracaufeu-EX",
	},

	hp: 220,

	type: [
		Type.FIRE,
	],

	dexId: 6,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy2/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy2/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy2/13/high",
		},
	},

	evolveFrom: {
		en: "Charizard-EX",
		fr: "Dracaufeu-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crimson Dive",
			fr: "Règle des Méga-Évolutions",
		},
		text: {
			en: "This Pokémon does 50 damage to itself.",
		},
		damage: 300
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Plongeon Écarlate",
		},
		text: {
			fr: "Ce Pokémon s'inflige 50 dégâts.",
		},
		damage: 300
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHoloEX,

	category: Category.POKEMON,

	set: {
		name: "Flashfire",
		code: "xy2"
	}
}

export default card
