import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-5",
	localId: 5,

	// Card informations
	name: {
		en: "Infernape",
		fr: "Simiabraz",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 392,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/5/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/5/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/5/high",
		},
	},

	evolveFrom: {
		en: "Monferno",
		fr: "Chimpenfeu",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Nakaoka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Meteor Punch",
			fr: "Poing-météore",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 30 dégâts multipliés par le nombre de faces.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Flare Blitz",
			fr: "Boutefeu",
		},
		text: {
			en: "Discard all Fire Energy attached to Infernape.",
			fr: "Défaussez toutes les Énergies Fire attachées à Simiabraz.",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+30"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
