import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Parasect",
		fr: "Parasect",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 47,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/5/high",
		},
	},

	evolveFrom: {
		en: "Paras",
		fr: "Paras",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 147,
		name: "Eri Yamaki"
	},



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Fury Cutter",
			fr: "Taillade",
		},
		text: {
			en: "Flip 3 coins. If 1 of them is heads, this attack does 20 more damage. If 2 of them are heads, this attack does 60 more damage. If all of them are heads, this attack does 120 more damage.",
			fr: "Lancez 3 pièces. S’il n’y a qu’un côté face, cette attaque inflige 20 dégâts supplémentaires. S’il y a 2 côtés face, cette attaque inflige 60 dégâts supplémentaires. S’il y a 3 côtés face, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Mushroom Drain",
			fr: "Champi Drain",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
