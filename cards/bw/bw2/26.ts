import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-26",
	localId: 26,

	// Card informations
	name: {
		en: "Ducklett",
		fr: "Couaneton",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 580,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/26/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/26/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/26/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/26/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Roost",
			fr: "Atterrissage",
		},
		text: {
			en: "Heal 40 damage from this Pokémon. This Pokémon can't retreat during your next turn.",
			fr: "Soignez 40 dégâts à ce Pokémon. Ce Pokémon ne peut pas battre en retraite pendant votre prochain tour.",
		},
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
		},
		damage: 20
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

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
