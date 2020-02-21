import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-64",
	localId: 64,

	// Card informations
	name: {
		en: "Escavalier",
		fr: "Lançargot",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 589,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/64/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/64/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/64/high",
		},
	},

	evolveFrom: {
		en: "Karrablast",
		fr: "Carabing",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 9,
		name: "Mitsuhiro Arita"
	},



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Poke Through",
			fr: "Percée Indésirable",
		},
		text: {
			en: "Discard a random card from your opponent's hand.",
			fr: "Défaussez au hasard une carte de la main de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spiral Rush",
			fr: "Course en Spirale",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 more damage for each heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts supplémentaires pour chaque côté face.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
