import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-63",
	localId: 63,

	// Card informations
	name: {
		en: "Marowak",
		fr: "Ossatueur",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 105,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/63/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/63/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/63/high",
		},
	},

	evolveFrom: {
		en: "Cubone",
		fr: "Tragosso",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Heavy Bone",
			fr: "Os lourd",
		},
		text: {
			en: "Flip a coin. If tails, Marowak can't use Heavy Bone during your next turn.",
			fr: "Lancez une pièce. Si c'est pile, Ossatueur ne peut pas utiliser Os lourd lors de votre prochain tour.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Bone Rush",
			fr: "Charge-os",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 50 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Cette attaque inflige 50 dégâts multipliés par le nombre de faces.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "+20"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.Uncommon,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
