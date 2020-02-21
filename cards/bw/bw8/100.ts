import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw8-100",
	localId: 100,

	// Card informations
	name: {
		en: "Dodrio",
		fr: "Dodrio",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 85,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw8/100/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/100/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw8/100/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw8/100/high",
		},
	},

	evolveFrom: {
		en: "Doduo",
		fr: "Doduo",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 27,
		name: "kawayoo"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Raging Pecks",
			fr: "Bec Enragé",
		},
		text: {
			en: "Flip 3 coins. This attack does 30 damage times the number of heads. This Pokémon is now Confused.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face. Ce Pokémon est maintenant Confus.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drill Peck",
			fr: "Bec Vrille",
		},
		damage: 60
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

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Plasma Storm",
		code: "bw8"
	}
}

export default card
