import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "bw1-89",
	localId: 89,

	// Card informations
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 573,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw1/89/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/89/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw1/89/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw1/89/high",
		},
	},

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 0,
		name: "Kagemaru Himeno"
	},



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Tail Slap",
			fr: "Plumo-Queue",
		},
		text: {
			en: "Flip 2 coins. This attack does 20 damage times the number of heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Do the Wave",
			fr: "Faites la Vague",
		},
		text: {
			en: "Does 20 damage times the number of your Benched Pokémon.",
			fr: "Inflige 20 dégâts multipliés par le nombre de vos Pokémon de Banc.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Black & White",
		code: "bw1"
	}
}

export default card
