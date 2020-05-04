import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-28",
	localId: 28,

	// Card informations
	name: {
		en: "Darmanitan",
		fr: "Darumacho",
	},

	hp: 110,

	type: [
		Type.FIRE,
	],

	dexId: 555,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/28/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/28/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/28/high",
		},
	},

	evolveFrom: {
		en: "Darumaka",
		fr: "Darumarond",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Continuous Tumble",
			fr: "Roulade Continue",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 20 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 20 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Damage Counterpunch",
			fr: "Riposte Enragée",
		},
		text: {
			en: "If this Pokémon has any damage counters on it, this attack does 60 more damage.",
			fr: "Si ce Pokémon a des marqueurs de dégâts, cette attaque inflige 60 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
