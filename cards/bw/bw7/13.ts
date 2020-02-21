import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-13",
	localId: 13,

	// Card informations
	name: {
		en: "Serperior",
		fr: "Majaspic",
	},

	hp: 140,

	type: [
		Type.GRASS,
	],

	dexId: 497,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/13/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/13/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/13/high",
		},
	},

	evolveFrom: {
		en: "Servine",
		fr: "Lianaja",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: {
		id: 3,
		name: "Mizue"
	},



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Double Slash",
			fr: "Double Lame",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mega Drain",
			fr: "Méga-Sangsue",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RareHolo,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
