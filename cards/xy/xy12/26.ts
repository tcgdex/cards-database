import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-26",
	localId: 26,

	// Card informations
	name: {
		en: "Slowbro-EX",
		fr: "Flagadoss-EX",
	},

	hp: 180,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/26/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/26/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slack Off",
			fr: "Paresse",
		},
		text: {
			en: "Heal 60 damage from this Pokémon. This Pokémon can't attack during your next turn.",
			fr: "Soignez 60 dégâts à ce Pokémon. Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Flash Splash",
			fr: "Éclaboussure Éclair",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
