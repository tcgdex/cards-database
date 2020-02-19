import Card from '../../../interfaces/Card'
import Type from '../../../interfaces/Type'
import Tag from '../../../interfaces/Tag'
import Rarity from '../../../interfaces/Rarity'
import AbilityType from '../../../interfaces/AbilityType'
import Category from '../../../interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-19",
	localId: 19,

	// Card informations
	name: {
		en: "Gyarados",
		fr: "Gyarados",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 130,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/19/low.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/19/low.png",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/19/high.png",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/19/high.png",
		},
	},

	evolveFrom: {
		en: "Magikarp",
		fr: "Magicarpe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: {
		id: 2,
		name: "Midori Harada"
	},



	attacks: [{
		name: {
			en: "Tail Revenge",
			fr: "Queue vengeance",
		},
		text: {
			en: "Does 30 damage times the number of Magikarp in your discard pile.",
			fr: "Inflige 30 dégâts multipliés par le nombre de Magicarpes dans votre pile de défausse.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Wreak Havoc",
			fr: "Causer des ravages",
		},
		text: {
			en: "Flip a coin until you get tails. For each heads, discard the top card from your opponent's deck.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez pile. Pour chaque face, défaussez la carte du dessus du deck de votre adversaire.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Beat",
			fr: "Draco-battement",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card from each of your opponent's Pokémon.",
			fr: "Lancez une pièce. Si c'est face, défaussez une carte Énergie de chacun des Pokémon de votre adversaire.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+30"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.Rare,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card

