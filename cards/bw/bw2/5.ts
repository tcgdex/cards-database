import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw2-5",
	localId: 5,

	// Card informations
	name: {
		en: "Swadloon",
		fr: "Couverdure",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 541,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw2/5/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw2/5/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw2/5/high",
		},
	},

	evolveFrom: {
		en: "Sewaddle",
		fr: "Larveyette",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 15,
		name: "Naoki Saito"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 20
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Razor Leaf",
			fr: "Double Tranch'Herbe",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Emerging Powers",
		code: "bw2"
	}
}

export default card
