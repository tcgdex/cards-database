import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

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
			en: "https://assets.tcgdex.net/en/pl/pl3/43/low.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/43/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/pl/pl3/43/high.png",
			fr: "https://assets.tcgdex.net/fr/pl/pl3/43/high.png",
		},
	},

	evolveFrom: {
		en: "Goldeen",
		fr: "Poissirène",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 29,
		name: "Suwama Chiaki"
	},



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

