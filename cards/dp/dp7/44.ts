import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-44",
	localId: 44,

	// Card informations
	name: {
		en: "Miltank",
		fr: "Miltank",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 241,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/44/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/44/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/44/high",
		},
	},

	evolveFrom: {
		fr: "Écrémeuh",
	},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Collect",
			fr: "Collectionner",
		},
		text: {
			en: "Draw a card.",
			fr: "Piochez une carte.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Milk",
			fr: "Énergie lait",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, remove 2 damage counters from 1 of your Pokémon.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, retirez à 1 de vos Pokémon 2 marqueurs de dégât.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Stomp",
			fr: "Écrasement",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
