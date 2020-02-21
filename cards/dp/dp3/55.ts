import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp3-55",
	localId: 55,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp3/55/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp3/55/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp3/55/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		name: {
			en: "Healing Milk",
			fr: "Lait guérisseur",
		},
		text: {
			en: "Flip 2 coins. For each heads, remove 3 damage counters from 1 of your Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque face, retirez à 1 de vos Pokémon 3 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Tumble",
			fr: "Roulage continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 20 dégâts multipliés par le nombre de faces.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Secret Wonders",
		code: "dp3"
	}
}

export default card
