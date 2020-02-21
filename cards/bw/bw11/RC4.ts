import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-RC4",
	localId: "RC4",

	// Card informations
	name: {
		en: "Growlithe",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 58,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/RC4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 39,
		name: "Sanosuke Sakuma"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rest",
		},
		text: {
			en: "Heal all damage from this Pokémon. This Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lunge",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
