import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-17",
	localId: 17,

	// Card informations
	name: {
		en: "Reshiram",
		fr: "Reshiram",
	},

	hp: 130,

	type: [
		Type.FIRE,
	],

	dexId: 643,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/17/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/17/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/17/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/17/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 19,
		name: "Shin Nagasawa"
	},



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Purifying Flame",
			fr: "Flamme Purifiante",
		},
		text: {
			en: "Remove all Special Conditions from this Pokémon.",
			fr: "Retirez tous les États Spéciaux de ce Pokémon.",
		},
		damage: 50
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fusion Flare",
			fr: "Flamme Croix",
		},
		text: {
			en: "If Zekrom is on your Bench, this attack does 40 more damage.",
			fr: "Si Zekrom est sur votre Banc, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
