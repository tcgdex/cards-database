import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-41",
	localId: 41,

	// Card informations
	name: {
		en: "Beartic",
		fr: "Polagriffe",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 614,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/41/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/41/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/41/high",
		},
	},

	evolveFrom: {
		en: "Cubchoo",
		fr: "Polarhume",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 4,
		name: "5ban Graphics"
	},



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Powerful Rage",
			fr: "Rage Massive",
		},
		text: {
			en: "Does 20 damage times the number of damage counters on this Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre de marqueurs de dégâts placés sur ce Pokémon.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Glacier Drop",
			fr: "Chute de Glacier",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
