import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-58",
	localId: 58,

	// Card informations
	name: {
		en: "Lairon",
		fr: "Galegon",
	},

	hp: 90,

	type: [
		Type.METAL,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/58/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/58/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/58/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/58/high",
		},
	},

	evolveFrom: {
		en: "Aron",
		fr: "Galekid",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 8,
		name: "Masakazu Fukuda"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Metal Claw",
			fr: "Griffe Acier",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Iron Head",
			fr: "Tête de Fer",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
