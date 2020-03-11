import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "pl3-43",
	localId: 43,

	// Card informations
	name: {
		en: "Seaking",
		fr: "Poissoroy",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 119,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/pl/pl3/43/low",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/43/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/43/high",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/43/high",
		},
	},

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Suwama Chiaki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Horn Pierce",
			fr: "Corne perçante",
		},
		text: {
			en: "Flip 2 coins. If either of them is tails, this attack does nothing.",
			fr: "Lancez 2 pièces. Si l'une d'elles est pile, cette attaque est sans effet.",
		},
		damage: 90
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Endure",
			fr: "Ténacité",
		},
		text: {
			en: "Flip a coin. If heads, during your opponent's next turn, if Seaking would be Knocked Out by damage from an attack, Seaking is not Knocked Out and its remaining HP becomes 10 instead.",
			fr: "Lancez une pièce. Si c'est face, si Poissoroy est mis K.O. par des dégâts d'une attaque lors du prochain tour de votre adversaire, il n'est pas mis K.O. À la place, il lui reste 10 PV.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Supreme Victors",
		code: "pl3"
	}
}

export default card
