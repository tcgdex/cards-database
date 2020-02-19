import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/bw/bw2/26/low.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/26/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/26/high.png",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/26/high.png",
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

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card

