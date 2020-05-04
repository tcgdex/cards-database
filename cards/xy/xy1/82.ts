import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-82",
	localId: 82,

	// Card informations
	name: {
		en: "Bisharp",
		fr: "Scalproie",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 625,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/82/high",
		},
	},

	evolveFrom: {
		en: "Pawniard",
		fr: "Scalpion",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Sound",
			fr: "Strido-Son",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Wallop",
			fr: "Torgnole Métallique",
		},
		text: {
			en: "During your next turn, this Pokémon's Metal Wallop attack does 40 more damage (before applying Weakness and Resistance).",
			fr: "Pendant votre prochain tour, l'attaque Torgnole Métallique de ce Pokémon inflige 40 dégâts supplémentaires (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
